import { supabase } from "../lib/supabaseClient";
import { useState, useEffect } from "react";

export default function useFetch(URL) {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLawyers() {
      try {
        setLoading(true);
        const {data, error} = await supabase.from(URL).select("*");
        
        if (error) throw error;
        console.log(data);
        setLawyers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getLawyers();
  }, []);
 return { lawyers, loading, error };
}

