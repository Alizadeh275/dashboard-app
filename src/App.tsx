import { Pie, Bar } from "react-chartjs-2";
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
  // داده‌های نمونه برای نمودار دایره‌ای
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

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" as const, labels: { font: { family: "IRANSans" } } },
      title: { display: true, text: "نمودار وضعیت دستورکارها", font: { family: "IRANSans", size: 20 } },
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
      legend: { position: "top" as const, labels: { font: { family: "Vazirmatn" } } },
      title: { display: true, text: "نمودار مقایسه ماهانه دستورکارها", font: { family: "Vazirmatn", size: 20 } },
    },
    scales: {
      x: { ticks: { font: { family: "Vazirmatn" } } },
      y: { beginAtZero: true, ticks: { font: { family: "Vazirmatn" } } },
    },
    animation: {
      duration: 1200,
      easing: "easeInOutQuart" as const,
    },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">داشبورد تحلیل دستورکارها</h1>

      {/* نمودار دایره‌ای */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mb-10">
        <Pie data={pieData} options={pieOptions} />
      </div>

      {/* نمودار ستونی */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}
