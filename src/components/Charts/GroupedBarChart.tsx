import { Bar } from 'react-chartjs-2';

interface GroupedBarChartProps {
  data: any;
  title?: string;
}

export const GroupedBarChart = ({ data, title = "نمودار میله‌ای گروه‌بندی شده" }: GroupedBarChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'IRANSans',
            size: 12
          },
          padding: 15,
          usePointStyle: true,
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
          family: 'IRANSans',
          size: 12
        },
        titleFont: {
          family: 'IRANSans',
          size: 12
        },
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value.toLocaleString('fa-IR')}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'IRANSans',
            size: 11
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: 'IRANSans',
            size: 11
          },
          callback: function(value: any) {
            return value.toLocaleString('fa-IR');
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};