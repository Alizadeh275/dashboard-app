import { Doughnut } from "react-chartjs-2";
import {type DoughnutChartProps } from "./DoughnutChart.types";

export const DoughnutChart = ({ data, totalCount }: DoughnutChartProps) => {
  const options = {
    responsive: true,
    cutout: "60%",
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
        rtl: true,
        bodyFont: { family: "IRANSans" },
        titleFont: { family: "IRANSans" },
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mb-10 relative">
      <Doughnut data={data} options={options} />
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
  );
};