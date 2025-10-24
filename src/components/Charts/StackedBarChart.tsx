import { Bar } from 'react-chartjs-2';

interface StackedBarChartProps {
  data: any;
  title?: string;
}

export const StackedBarChart = ({ data, title = "نمودار میله‌ای" }: StackedBarChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'IRANSans'
          }
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          family: 'IRANSans',
          size: 16
        }
      },
      tooltip: {
        rtl: true,
        bodyFont: {
          family: 'IRANSans'
        },
        titleFont: {
          family: 'IRANSans'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'IRANSans'
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: 'IRANSans'
          }
        }
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};