import { Bar } from "react-chartjs-2";
import { type BarChartProps } from "./BarChart.types";

export const BarChart = ({ data }: BarChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Add this
    plugins: {
      legend: { 
        position: "top" as const, 
        labels: { font: { family: "IRANSans" } } 
      },
      title: { 
        display: true, 
        text: "نمودار مقایسه", // Shorter title
        font: { family: "IRANSans", size: 14 } // Smaller font
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
        ticks: { font: { family: "IRANSans" } } 
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
    <div className="w-full h-full"> {/* Just the chart container */}
      <Bar data={data} options={options} />
    </div>
  );
};