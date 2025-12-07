// components/GroupBySection.tsx
interface GroupBySectionProps {
    groupBy: string[];
    onGroupByChange: (field: string, checked: boolean) => void;
    labels: { [key: string]: string };
  }
  
  export const GroupBySection = ({ groupBy, onGroupByChange, labels }: GroupBySectionProps) => (
    <div>
      <h4 className="font-semibold mb-3 text-gray-700">گروه‌بندی بر اساس</h4>
      <div className="flex flex-wrap gap-4">
        {Object.entries(labels).map(([value, label]) => (
          <label key={value} className="flex items-center space-x-2 space-x-reverse cursor-pointer">
            <input
              type="checkbox"
              checked={groupBy.includes(value)}
              onChange={(e) => onGroupByChange(value, e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-700">{label}</span>
          </label>
        ))}
      </div>
      
      {/* Group By Summary */}
      {groupBy.length > 0 && (
        <div className="mt-3 p-3 bg-blue-50 rounded text-sm border border-blue-200">
          <strong className="text-blue-800">گروه‌بندی انتخاب شده:</strong>{' '}
          <span className="text-blue-700">
            {groupBy.map(g => labels[g]).join(' → ')}
          </span>
        </div>
      )}
    </div>
  );