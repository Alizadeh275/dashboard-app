import { useAggregationData } from '../../hooks/useAggregationData';
import { transformChartData } from '../../utils/chartTransformers';
import { StackedBarChart } from '../Charts/StackedBarChart';
import { GroupedBarChart } from '../Charts/GroupedBarChart';
import { DataTable } from '../DataTable/DataTable';

interface DynamicChartProps {
  filters: any;
  groupBy: string[];
}

export const DynamicChart = ({ filters, groupBy }: DynamicChartProps) => {
  const { data, loading, error } = useAggregationData(filters, groupBy);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-64">
          <p className="text-lg">در حال بارگذاری داده‌ها...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-64">
          <p className="text-red-500 text-lg">خطا در بارگذاری داده‌ها: {error}</p>
        </div>
      </div>
    );
  }

  if (!data || !data.chart_data || data.chart_data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500 text-lg">داده‌ای برای نمایش وجود ندارد. فیلترها یا گروه‌بندی را تغییر دهید.</p>
        </div>
      </div>
    );
  }

  // Transform data based on groupBy dimensions
  const chartConfig = transformChartData(data.chart_data, groupBy);

  const renderChart = () => {
    switch (chartConfig.type) {
      case 'stackedBar':
        return <StackedBarChart data={chartConfig.data} title={`گروه‌بندی بر اساس ${groupBy[0]}`} />;
      
      case 'groupedBar':
        return <GroupedBarChart data={chartConfig.data} title={`گروه‌بندی بر اساس ${groupBy.join(' و ')}`} />;
      
      case 'heatmap':
        return <div className="text-center py-8">نمودار Heatmap به زودی اضافه خواهد شد</div>;
      
      case 'treemap':
        return <div className="text-center py-8">نمودار Treemap به زودی اضافه خواهد شد</div>;
      
      case 'table':
      default:
        return <DataTable data={data.chart_data} groupBy={groupBy} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">نمودار تحلیلی</h3>
        <div className="text-sm text-gray-600">
          <span>گروه‌بندی: {groupBy.join(' → ')}</span>
          <span className="mx-2">•</span>
          <span>تعداد کل: {data.total_count.toLocaleString('fa-IR')}</span>
          <span className="mx-2">•</span>
          <span>رکوردها: {data.chart_data.length}</span>
        </div>
      </div>
      
      <div className="h-96">
        {renderChart()}
      </div>
    </div>
  );
};