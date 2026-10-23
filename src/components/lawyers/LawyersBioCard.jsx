import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";
import LawersDetailedCard from "./LawersDetailedCard";

function LawyersBioCard() {
  const [lawyersBio, setLawyersBio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLawyers() {
      try {
        setLoading(true);
        const response = await supabase.from("lawyers").select("*");
        const data = response.data;
        if (response.error) throw error;
        console.log(data);
        setLawyersBio(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    // getLawyers()
  }, []);

  //   console.log(lawyersBio)
  return (
    <>
  <LawersDetailedCard ></LawersDetailedCard>

    </>
  );
}

export default LawyersBioCard;
