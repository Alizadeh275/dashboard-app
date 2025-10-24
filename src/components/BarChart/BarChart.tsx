import { Bar } from "react-chartjs-2";
import { type BarChartProps } from "./BarChart.types";

export const BarChart = ({ data }: BarChartProps) => {
  const options = {
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
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <Bar data={data} options={options} />
    </div>
  );
};