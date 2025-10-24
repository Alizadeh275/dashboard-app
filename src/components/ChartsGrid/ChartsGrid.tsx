import { DoughnutChartContainer } from '../DoughnutChart/DoughnutChart.container';
import { BarChartContainer } from '../BarChart/BarChart.container';
import { TypeAnimation } from 'react-type-animation';

export const ChartsGrid = () => {
  const charts = [
    {
      id: 1,
      type: 'doughnut',
      component: <DoughnutChartContainer key="doughnut-1" />,
      title: "وضعیت دستورکارها"
    },
    {
      id: 2,
      type: 'bar',
      component: <BarChartContainer key="bar-1" />,
      title: "مقایسه ماهانه دستورکارها"
    },
    {
      id: 3,
      type: 'doughnut',
      component: (
        <DoughnutChartContainer 
          key="doughnut-2"
          data={{
            labels: ["پروژه A", "پروژه B", "پروژه C"],
            datasets: [
              {
                label: "وضعیت پروژه‌ها",
                data: [30, 45, 25],
                backgroundColor: [
                  "rgba(255,99,132,0.7)",
                  "rgba(54,162,235,0.7)",
                  "rgba(255,205,86,0.7)",
                ],
                borderColor: [
                  "rgba(255,99,132,1)",
                  "rgba(54,162,235,1)",
                  "rgba(255,205,86,1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      ),
      title: "وضعیت پروژه‌ها"
    },
    {
      id: 4,
      type: 'bar',
      component: (
        <BarChartContainer 
          key="bar-2"
          data={{
            labels: ["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            datasets: [
              {
                label: "فروش ماهانه",
                data: [450, 320, 510, 480, 390, 550],
                backgroundColor: "rgba(139,69,19,0.7)",
                borderColor: "rgba(139,69,19,1)",
                borderWidth: 1,
              },
              {
                label: "هدف فروش",
                data: [400, 400, 400, 400, 400, 400],
                backgroundColor: "rgba(128,128,128,0.7)",
                borderColor: "rgba(128,128,128,1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      ),
      title: "فروش ماهانه"
    },
    {
      id: 5,
      type: 'doughnut',
      component: (
        <DoughnutChartContainer 
          key="doughnut-3"
          data={{
            labels: ["تحت بررسی", "تأیید شده", "رد شده"],
            datasets: [
              {
                label: "وضعیت درخواست‌ها",
                data: [60, 25, 15],
                backgroundColor: [
                  "rgba(255,159,64,0.7)",
                  "rgba(75,192,192,0.7)",
                  "rgba(153,102,255,0.7)",
                ],
                borderColor: [
                  "rgba(255,159,64,1)",
                  "rgba(75,192,192,1)",
                  "rgba(153,102,255,1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      ),
      title: "وضعیت درخواست‌ها"
    },
    {
      id: 6,
      type: 'bar',
      component: (
        <BarChartContainer 
          key="bar-3"
          data={{
            labels: ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز", "کرج"],
            datasets: [
              {
                label: "کاربران فعال",
                data: [1200, 800, 600, 500, 400, 300],
                backgroundColor: "rgba(220,20,60,0.7)",
                borderColor: "rgba(220,20,60,1)",
                borderWidth: 1,
              },
              {
                label: "کاربران جدید",
                data: [300, 200, 150, 120, 100, 80],
                backgroundColor: "rgba(50,205,50,0.7)",
                borderColor: "rgba(50,205,50,1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      ),
      title: "کاربران فعال بر اساس شهر"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {charts.map((chart, index) => (
        <div key={chart.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4 text-center" style={{ fontFamily: "IRANSans", minHeight: '48px' }}>
            <TypeAnimation
              sequence={[
                chart.title,
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{ display: 'inline-block' }}
              repeat={0}
              cursor={false}
            />
          </h3>
          <div className="h-64">
            {chart.component}
          </div>
        </div>
      ))}
    </div>
  );
};