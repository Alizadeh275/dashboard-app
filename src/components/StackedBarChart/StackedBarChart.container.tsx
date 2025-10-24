import { StackedBarChart } from "./StackedBarChart";
import { type StackedBarChartData } from "./StackedBarChart.types";

interface StackedBarChartContainerProps {
  data?: any;
  title?: string;
}

// Color mapping for statuses
const statusColors: { [key: string]: string } = {
  "دردست اجرا": "rgba(34,197,94,0.7)",
  "تهیه صورت وضعیت": "rgba(59,130,246,0.7)", 
  "صورت وضعیت نزد مالی": "rgba(245,158,11,0.7)",
  "صورت وضعیت نزد ستاد": "rgba(168,85,247,0.7)",
  "صورت وضعیت نزد مشاور": "rgba(236,72,153,0.7)",
};

export const StackedBarChartContainer = ({ 
  data,
  title = "وضعیت پروژه‌ها بر اساس نوع و وضعیت"
}: StackedBarChartContainerProps) => {
  
  // If no data provided, show empty state
  if (!data || !data.chart_data || data.chart_data.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p style={{ fontFamily: "IRANSans" }}>داده‌ای برای نمایش وجود ندارد</p>
      </div>
    );
  }
  
  const transformData = (apiData: any): StackedBarChartData => {
    const { chart_data } = apiData;
    
    const projectTypes: string[] = [...new Set(chart_data.map((item: any) => item.project_type_name))] as string[];
    const statuses: string[] = Object.keys(statusColors);
    
    const datasets = statuses.map(status => ({
      label: status,
      data: projectTypes.map(projectType => {
        const item = chart_data.find((d: any) => 
          d.project_type_name === projectType && d.status_name === status
        );
        return item ? item.count : 0;
      }),
      backgroundColor: statusColors[status],
      borderColor: statusColors[status].replace('0.7', '1'),
      borderWidth: 1,
    }));

    return {
      labels: projectTypes,
    //   datasets: datasets.filter(dataset => 
    //     dataset.data.some((count: number) => count > 0)
    //   )
      datasets: datasets // Remove the filter to show all statuses even with zero counts

    };
  };

  const chartData = transformData(data);

  return <StackedBarChart data={chartData} title={title} />;
};