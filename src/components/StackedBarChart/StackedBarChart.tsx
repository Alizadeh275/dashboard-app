import { Bar } from "react-chartjs-2";
import { type StackedBarChartProps } from "./StackedBarChart.types";

export const StackedBarChart = ({ data, title = "نمودار وضعیت پروژه‌ها" }: StackedBarChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: "top" as const, 
        labels: { font: { family: "IRANSans" } } 
      },
      title: { 
        display: true, 
        text: title, 
        font: { family: "IRANSans", size: 14 } 
      },
      tooltip: {
        rtl: true,
        bodyFont: { family: "IRANSans" },
        titleFont: { family: "IRANSans" },
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
        stacked: true,
        ticks: { font: { family: "IRANSans" } } 
      },
      y: { 
        stacked: true,
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
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};