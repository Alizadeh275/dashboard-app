// hooks/useGroupBy.ts
import { useState, useEffect } from "react";

export const useGroupBy = (onGroupByChange: (groupBy: string[]) => void) => {
  const [groupBy, setGroupBy] = useState<string[]>(["project_type", "status"]);

  useEffect(() => {
    onGroupByChange(groupBy);
  }, [groupBy, onGroupByChange]);

  const handleGroupByChange = (field: string, checked: boolean) => {
    setGroupBy((prev) =>
      checked ? [...prev, field] : prev.filter((f) => f !== field)
    );
  };

  return { groupBy, handleGroupByChange };
};
