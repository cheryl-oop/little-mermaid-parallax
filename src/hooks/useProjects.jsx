import projects from "../dataPlaceholder/projects.json";
import { useState, useEffect } from "react";

export const useProject = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(projects);
    } catch (error) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
