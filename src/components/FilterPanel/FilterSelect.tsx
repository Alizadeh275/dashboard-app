// components/FilterSelect.tsx
interface FilterSelectProps {
    label: string;
    value: Array<{ id: number; name: string }> | number[];
    onChange: (value: string) => void;
  }
  
  export const FilterSelect = ({ label, value, onChange }: FilterSelectProps) => (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-600">{label}</label>
      <select
        className="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">همه {label}</option>
        {value.map((item) => {
          if (typeof item === "number") {
            // handle number array
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          } else {
            // handle object array
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
  