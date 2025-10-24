export interface StackedBarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

export interface StackedBarChartProps {
  data: StackedBarChartData;
  title?: string;
}

// Add API data interfaces
export interface ChartDataItem {
  project_type_name: string;
  status_name: string;
  count: number;
}

export interface ApiResponse {
  total_count: number;
  chart_data: ChartDataItem[];
}
