import { DoughnutChart } from "./DoughnutChart";
import { type DoughnutChartData } from "./DoughnutChart.types";

interface DoughnutChartContainerProps {
  data?: DoughnutChartData; // Optional for flexibility
}

export const DoughnutChartContainer = ({ 
  data = defaultDoughnutData 
}: DoughnutChartContainerProps) => {
  // محاسبه مجموع برای نمایش در مرکز دونات
  const totalCount = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

  return <DoughnutChart data={data} totalCount={totalCount} />;
};

// داده‌های پیش‌فرض
const defaultDoughnutData: DoughnutChartData = {
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