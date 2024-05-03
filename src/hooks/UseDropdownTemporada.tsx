import { useEffect, useState } from "react";
import { UseFetch } from "./UseFetch";

export interface DatosTemporada {
  codigo: string;
  descripcion: string;
}

export interface TemporadaInterface {
  isSuccess: boolean;
  result: number;
  data: DatosTemporada[];
  message: string;
}

export function useTemporadaDropdown(apiUrl: string) {
  const [temporadas, setTemporadas] = useState<DatosTemporada[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data: TemporadaInterface = await UseFetch<TemporadaInterface>(
          apiUrl
        );
        if (isMounted && data.isSuccess) {
          setTemporadas(data.data);
        } else if (isMounted) {
          setError(data.message || "Failed to fetch temporadas data");
        }
      } catch (err) {
        console.error("Error fetching temporadas:", err);
        setError("An error occurred fetching temporadas");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  return { temporadas, isLoading, error };
}
