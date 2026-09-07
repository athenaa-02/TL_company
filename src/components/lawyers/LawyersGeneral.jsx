import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

function LawyersGeneral() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    fetchLawyers();
  }, []);

  if (loading) return <div className="h-200"></div>;
  if (error) return <div className="h-200"></div>;

  return (
    <>
      <div className="flex mt-30 mb-30 sm:mt-43.25 sm:mb-43.25 flex-wrap justify-center gap-30 sm:gap-20 lg:gap-30 xl:gap-50  items-center ">
        {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="card flex flex-col gap-9">
          <div className="w-74.25 h-113.25 ">
              <img src={lawyer.photo_url} className="w-full h-full object-cover" alt="" />
            </div>
            <h3 className="font-bold text-accent text-2xl text-center">{lawyer.full_name}</h3>
            <div className="w-72.5 h-24.5 "> {lawyer.bio}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LawyersGeneral;
