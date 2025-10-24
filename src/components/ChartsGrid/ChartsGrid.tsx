import { DoughnutChartContainer } from '../DoughnutChart/DoughnutChart.container';
import { BarChartContainer } from '../BarChart/BarChart.container';
import { StackedBarChartContainer } from '../StackedBarChart/StackedBarChart.container';
import { TypeAnimation } from 'react-type-animation';

export const ChartsGrid = () => {
  // Your actual API data
  const apiData = {
    "total_count": 18,
    "chart_data": [
      {
        "project_type_name": "تست3",
        "status_name": "تهیه صورت وضعیت",
        "count": 0
      },
      {
        "project_type_name": "تست 1", 
        "status_name": "دردست اجرا",
        "count": 0
      },
      {
        "project_type_name": "تست6",
        "status_name": "صورت وضعیت نزد مالی",
        "count": 0
      },
      {
        "project_type_name": "تست4",
        "status_name": "تهیه صورت وضعیت", 
        "count": 0
      },
      {
        "project_type_name": "تست4",
        "status_name": "صورت وضعیت نزد ستاد",
        "count": 0
      },
      {
        "project_type_name": "تست 1",
        "status_name": "صورت وضعیت نزد ستاد",
        "count": 0
      },
      {
        "project_type_name": "تست4",
        "status_name": "صورت وضعیت نزد مالی",
        "count": 0
      },
      {
        "project_type_name": "تست5",
        "status_name": "تهیه صورت وضعیت",
        "count": 0
      },
      {
        "project_type_name": "تست4",
        "status_name": "صورت وضعیت نزد مشاور",
        "count": 0
      },
      {
        "project_type_name": "تست2",
        "status_name": "دردست اجرا",
        "count": 0
      },
      {
        "project_type_name": "تست2",
        "status_name": "تهیه صورت وضعیت",
        "count": 0
      },
      {
        "project_type_name": "تست3",
        "status_name": "صورت وضعیت نزد مالی",
        "count": 0
      },
      {
        "project_type_name": "تست7",
        "status_name": "صورت وضعیت نزد مالی",
        "count": 0
      },
      {
        "project_type_name": "تست 1",
        "status_name": "صورت وضعیت نزد مالی",
        "count": 0
      },
      {
        "project_type_name": "تست2",
        "status_name": "صورت وضعیت نزد مالی",
        "count": 0
      },
      {
        "project_type_name": "تست7",
        "status_name": "دردست اجرا",
        "count": 6
      },
      {
        "project_type_name": "تست6",
        "status_name": "دردست اجرا",
        "count": 0
      },
      {
        "project_type_name": "تست5",
        "status_name": "صورت وضعیت نزد ستاد",
        "count": 0
      },
      {
        "project_type_name": "تست2",
        "status_name": "صورت وضعیت نزد ستاد",
        "count": 0
      },
      {
        "project_type_name": "تست5",
        "status_name": "صورت وضعیت نزد مشاور",
        "count": 0
      },
      {
        "project_type_name": "تست5",
        "status_name": "دردست اجرا",
        "count": 0
      },
      {
        "project_type_name": "تست6",
        "status_name": "صورت وضعیت نزد مشاور",
        "count": 0
      },
      {
        "project_type_name": "تست7",
        "status_name": "تهیه صورت وضعیت",
        "count": 0
      },
      {
        "project_type_name": "تست5",
        "status_name": "صورت وضعیت نزد مالی",
        "count": 0
      },
      {
        "project_type_name": "تست7",
        "status_name": "صورت وضعیت نزد مشاور",
        "count": 0
      },
      {
        "project_type_name": "تست4",
        "status_name": "دردست اجرا",
        "count": 12
      },
      {
        "project_type_name": "تست3",
        "status_name": "دردست اجرا",
        "count": 0
      },
      {
        "project_type_name": "تست6",
        "status_name": "تهیه صورت وضعیت",
        "count": 0
      },
      {
        "project_type_name": "تست 1",
        "status_name": "تهیه صورت وضعیت",
        "count": 0
      },
      {
        "project_type_name": "تست7",
        "status_name": "صورت وضعیت نزد ستاد",
        "count": 0
      },
      {
        "project_type_name": "تست3",
        "status_name": "صورت وضعیت نزد ستاد",
        "count": 0
      },
      {
        "project_type_name": "تست6",
        "status_name": "صورت وضعیت نزد ستاد",
        "count": 0
      }
    ]
  };

  const charts = [
    {
      id: 1,
      type: 'doughnut',
      component: <DoughnutChartContainer key="doughnut-1" />,
      title: "وضعیت دستورکارها"
    },
    {
      id: 2,
      type: 'stacked-bar',
      component: <StackedBarChartContainer key="stacked-bar-1" data={apiData} />,
      title: "وضعیت پروژه‌ها بر اساس نوع"
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
      type: 'stacked-bar',
      component: (
        <StackedBarChartContainer 
          key="stacked-bar-2"
          data={apiData}
          title="توزیع پروژه‌ها بر اساس وضعیت"
        />
      ),
      title: "توزیع پروژه‌ها"
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
            ],
          }}
        />
      ),
      title: "کاربران فعال بر اساس شهر"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {charts.map((chart) => (
        <div key={chart.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4 text-center" style={{ fontFamily: "IRANSans", minHeight: '48px' }}>
            <TypeAnimation
              sequence={[chart.title, 1000]}
              wrapper="span"
              speed={25}
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