import { useAggregationData } from '../../hooks/useAggregationData';

interface DynamicChartProps {
  filters: any;
  groupBy: string[];
}

export const DynamicChart = ({ filters, groupBy }: DynamicChartProps) => {
  const { data, loading, error } = useAggregationData(filters, groupBy);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>در حال بارگذاری داده‌ها...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-red-500">خطا در بارگذاری داده‌ها: {error}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>داده‌ای برای نمایش وجود ندارد. فیلترها یا گروه‌بندی را تغییر دهید.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">نمودار تحلیلی</h3>
      
      {/* Temporary data display - we'll replace with actual charts */}
      <div className="h-64 overflow-auto">
        <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>گروه‌بندی: {groupBy.join(' + ')}</p>
        <p>تعداد رکوردها: {data.length}</p>
      </div>
    </div>
  );
};