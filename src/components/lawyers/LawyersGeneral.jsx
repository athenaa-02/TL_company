import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="flex mt-30 mb-30 sm:mt-43.25 sm:mb-43.25 flex-wrap justify-center gap-25 sm:gap-15 lg:gap-30 xl:gap-50  items-center ">
        {lawyers.map((lawyer) => (
          <Link to={"/about"}>
            <div key={lawyer.id} className="card flex flex-col gap-9">
              <div className="w-70 h-108 md:w-74.25 md:h-113.25    ">
                <img
                  src={lawyer.photo_url}
                  className="w-full h-full object-cover"
                  alt={lawyer.full_name}
                />
              </div>
              <h3 className="font-bold text-accent text-2xl text-center">
                {lawyer.full_name}
              </h3>
              <p className="w-72.5  line-clamp-3"> {lawyer.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default LawyersGeneral;
