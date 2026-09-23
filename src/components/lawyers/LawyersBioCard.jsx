import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";

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
      <div className="flex flex-col md:flex-row max-w-250">
        <div className="max-w-115.5">
          <div>
            <h3 className="font-volkhov text-heading font-bold  text-[40px]">Giorgi bjhalava</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequuntur voluptate earum numquam labore deserunt
              distinctio, harum tempora ducimus ullam, nemo eos ratione vel
              corporis, eius eligendi voluptates possimus mollitia!
            </p>
          </div>
          <div>
            <h4>keti chalaghashvili</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequuntur voluptate earum numquam labore deserunt
              distinctio, harum tempora ducimus ullam, nemo eos ratione vel
              corporis, eius eligendi voluptates possimus mollitia!
            </p>
          </div>
        </div>
        <div className="w-90 h-130 md:w-115 md:h-150  ">
          <img
            //   src={lawyer.photo_url}
            className="w-full h-full object-cover"
            //   alt={lawyer.full_name}
          />
        </div>
      </div>
    </>
  );
}

export default LawyersBioCard;
