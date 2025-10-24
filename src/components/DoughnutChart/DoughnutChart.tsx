import { Doughnut } from "react-chartjs-2";
import { type DoughnutChartProps } from "./DoughnutChart.types";

export const DoughnutChart = ({ data, totalCount }: DoughnutChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Add this for grid
    cutout: "60%",
    plugins: {
      legend: { 
        position: "top" as const, 
        labels: { font: { family: "IRANSans" } } 
      },
      title: { 
        display: true, 
        text: "نمودار وضعیت", // Shorter title for grid
        font: { family: "IRANSans", size: 14 } // Smaller font
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
    <div className="relative w-full h-full"> {/* Remove container styles */}
      <Doughnut data={data} options={options} />
      {/* آنوتیشن مرکزی */}
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
        <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "IRANSans" }}>
          {totalCount}
        </div>
        <div className="text-xs text-gray-600 mt-1" style={{ fontFamily: "IRANSans" }}>
          کل
        </div>
      </div>
    </div>
  );
};