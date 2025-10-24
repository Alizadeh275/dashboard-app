import { AnalyticsDashboard } from './components/AnalyticsDashboard/AnalyticsDashboard';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title as ChartTitle,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js elements
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartTitle,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function App() {
  return <AnalyticsDashboard />;
}