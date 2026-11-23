import { supabase } from "../lib/supabaseClient";
import { useState, useEffect } from "react";

export default function useFetch(URL) {
  const [data, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLawyers() {
      try {
        setLoading(true);
        const {data, error} = await supabase.from(URL).select("*");
        
        if (error) throw error;
        setLawyers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getLawyers();
  }, []);
 return { data, loading, error };
}

