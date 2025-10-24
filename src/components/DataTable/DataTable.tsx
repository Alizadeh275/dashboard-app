import { AggregationResult } from '../../api/aggregationApi';

interface DataTableProps {
  data: AggregationResult[];
  groupBy: string[];
}

export const DataTable = ({ data, groupBy }: DataTableProps) => {
  const dimensionLabels: { [key: string]: string } = {
    project_type: 'نوع پروژه',
    status: 'وضعیت',
    location: 'شهر',
    year: 'سال',
    month: 'ماه'
  };

  return (
    <div className="h-96 overflow-auto">
      <table className="w-full text-sm text-right">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            {groupBy.map(dim => (
              <th key={dim} className="px-4 py-2 font-semibold text-gray-700 border-b">
                {dimensionLabels[dim] || dim}
              </th>
            ))}
            <th className="px-4 py-2 font-semibold text-gray-700 border-b">تعداد</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {groupBy.map(dim => (
                <td key={dim} className="px-4 py-2 border-b">
                  {item[dim]?.toString() || 'نامشخص'}
                </td>
              ))}
              <td className="px-4 py-2 border-b font-medium">
                {item.count.toLocaleString('fa-IR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};