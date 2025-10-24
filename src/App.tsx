import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// ثبت اجزای مورد نیاز برای هر دو نمودار
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function App() {
  // داده‌های نمونه برای نمودار دونات
  const pieData = {
    labels: ["در دست اجرا", "نزد مالی", "تکمیل شده"],
    datasets: [
      {
        label: "وضعیت دستورکارها",
        data: [44, 33, 55],
        backgroundColor: [
          "rgba(34,197,94,0.7)", // سبز
          "rgba(59,130,246,0.7)", // آبی
          "rgba(245,158,11,0.7)", // زرد
        ],
        borderColor: [
          "rgba(34,197,94,1)",
          "rgba(59,130,246,1)",
          "rgba(245,158,11,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // محاسبه مجموع برای نمایش در مرکز دونات
  const totalCount = pieData.datasets[0].data.reduce((sum, value) => sum + value, 0);

  const doughnutOptions = {
    responsive: true,
    cutout: "60%", // این باعث ایجاد حفره در وسط و تبدیل به دونات می‌شود
    plugins: {
      legend: { 
        position: "top" as const, 
        labels: { font: { family: "IRANSans" } } 
      },
      title: { 
        display: true, 
        text: "نمودار وضعیت دستورکارها", 
        font: { family: "IRANSans", size: 20 } 
      },
      tooltip: {
        rtl: true, // فعال کردن راست به چپ برای tooltip
        bodyFont: {
          family: "IRANSans", // فونت فارسی برای tooltip
        },
        titleFont: {
          family: "IRANSans", // فونت فارسی برای عنوان tooltip
        },
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = ((value / totalCount) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    animation: { animateScale: true, animateRotate: true },
  };

  // داده‌های نمونه برای نمودار ستونی
  const barData = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    datasets: [
      {
        label: "تعداد دستورکارهای تکمیل‌شده",
        data: [120, 190, 300, 250, 200, 300],
        backgroundColor: "rgba(59,130,246,0.7)", // آبی
        borderColor: "rgba(59,130,246,1)",
        borderWidth: 1,
      },
      {
        label: "تعداد دستورکارهای درحال‌اجرا",
        data: [100, 150, 200, 180, 170, 160],
        backgroundColor: "rgba(245,158,11,0.7)", // زرد
        borderColor: "rgba(245,158,11,1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { 
        position: "top" as const, 
        labels: { font: { family: "IRANSans" } } 
      },
      title: { 
        display: true, 
        text: "نمودار مقایسه ماهانه دستورکارها", 
        font: { family: "IRANSans", size: 20 } 
      },
      tooltip: {
        rtl: true, // فعال کردن راست به چپ برای tooltip
        bodyFont: {
          family: "IRANSans", // فونت فارسی برای tooltip
        },
        titleFont: {
          family: "IRANSans", // فونت فارسی برای عنوان tooltip
        },
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    },
    scales: {
      x: { 
        ticks: { 
          font: { family: "IRANSans" } 
        } 
      },
      y: { 
        beginAtZero: true, 
        ticks: { font: { family: "IRANSans" } } 
      },
    },
    animation: {
      duration: 1200,
      easing: "easeInOutQuart" as const,
    },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "IRANSans" }}>
        داشبورد تحلیل دستورکارها
      </h1>

      {/* نمودار دونات با آنوتیشن مرکزی */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mb-10 relative">
        <Doughnut data={pieData} options={doughnutOptions} />
        {/* آنوتیشن مرکزی */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: "IRANSans" }}>
              {totalCount}
            </div>
            <div className="text-sm text-gray-600 mt-1" style={{ fontFamily: "IRANSans" }}>
              کل دستورکارها
            </div>
          </div>
        </div>
      </div>

      {/* نمودار ستونی */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}