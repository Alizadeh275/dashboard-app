import { BarChart } from "./BarChart";
import { type BarChartData } from "./BarChart.types";

interface BarChartContainerProps {
  data?: BarChartData; // Optional for flexibility
}

export const BarChartContainer = ({ 
  data = defaultBarData 
}: BarChartContainerProps) => {
  return <BarChart data={data} />;
};

// داده‌های پیش‌فرض
const defaultBarData: BarChartData = {
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