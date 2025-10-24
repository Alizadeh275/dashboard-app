export interface DoughnutChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export interface DoughnutChartProps {
  data: DoughnutChartData;
  totalCount: number;
}
