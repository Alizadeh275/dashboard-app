import { AggregationResult } from '../../api/aggregationApi';

interface DataTableProps {
  data: AggregationResult[];
  groupBy: string[];
}

export const DataTable = ({ data, groupBy }: DataTableProps) => {
  // Map groupBy dimensions to actual field names in the data
  const fieldMapping: { [key: string]: string } = {
    project_type: 'project_type_name',
    status: 'status_name', 
    location: 'city_name',
    year: 'year',
    month: 'month'
  };

  const dimensionLabels: { [key: string]: string } = {
    project_type: 'نوع پروژه',
    status: 'وضعیت',
    location: 'شهر',
    year: 'سال',
    month: 'ماه'
  };

  // Get the actual field name for each dimension
  const getFieldName = (dim: string) => fieldMapping[dim] || dim;

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
                  {item[getFieldName(dim)]?.toString() || 'نامشخص'}
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