import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

function LawyersGeneral() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(supabase)

  useEffect(() => {
    async function fetchLawyers() {
      try {
        setLoading(true);

        const { data, error } = await supabase.from("lawyers").select("*");
        if (error) throw error;
        setLawyers(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchLawyers()
  }, []);

  if(loading) return <div className="h-200"></div>
  if(error) return <div className="h-200"></div>

  return <>
  <div>
{lawyers.map((lawyer) =>(
<div key={lawyer.id} >
    <h3 className="font-bold">{lawyer.full_name}</h3>
</div>
))}

  </div>
  </>;
}

export default LawyersGeneral;
