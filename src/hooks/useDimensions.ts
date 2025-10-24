import { useState, useEffect } from "react";
import { dimensionsApi, DimensionItem } from "../api/dimensionsApi";

interface DimensionsData {
  locations: DimensionItem[];
  projectTypes: DimensionItem[];
  statuses: DimensionItem[];
  years: number[];
  months: number[];
}

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState<DimensionsData>({
    locations: [],
    projectTypes: [],
    statuses: [],
    years: [],
    months: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDimensions = async () => {
      try {
        setLoading(true);
        setError(null);

        const [locations, projectTypes, statuses, years, months] =
          await Promise.all([
            dimensionsApi.getLocations(),
            dimensionsApi.getProjectTypes(),
            dimensionsApi.getStatuses(),
            dimensionsApi.getYears(),
            dimensionsApi.getMonths(),
          ]);

        setDimensions({ locations, projectTypes, statuses, years, months });
      } catch (err: any) {
        setError(err.message || "Failed to load dimensions");
        console.error("Error loading dimensions:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDimensions();
  }, []);

  return { dimensions, loading, error };
};
