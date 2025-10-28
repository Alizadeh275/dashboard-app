// components/FilterPanelError.tsx
interface FilterPanelErrorProps {
    error: string;
  }
  
  export const FilterPanelError = ({ error }: FilterPanelErrorProps) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-red-500">خطا در بارگذاری فیلترها: {error}</p>
      <button 
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => window.location.reload()}
      >
        تلاش مجدد
      </button>
    </div>
  );