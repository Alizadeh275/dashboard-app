import { useState, useEffect } from "react";
import {
  aggregationApi,
  AggregationFilters,
  AggregationResponse,
} from "../api/aggregationApi";

export const useAggregationData = (
  filters: AggregationFilters,
  groupBy: string[]
) => {
  const [data, setData] = useState<AggregationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (groupBy.length === 0) {
        setData(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const result = await aggregationApi.getAggregatedData(filters, groupBy);
        setData(result);
      } catch (err: any) {
        setError(err.message || "Failed to fetch aggregation data");
        console.error("Error fetching aggregation data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters, groupBy]);

  return { data, loading, error };
};
