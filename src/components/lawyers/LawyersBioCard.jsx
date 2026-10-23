import LawersDetailedCard from "./LawersDetailedCard";
import useFetch from "../../hooks/useFetch";

function LawyersBioCard() {
  const { data, loading, error } = useFetch("lawyers");

  if (error) throw error;

  //i should add loading state checking here
  return (
    <>
      {data.map((lawyer, index) => (
        <LawersDetailedCard
          key={lawyer.id}
          data={lawyer}
          reverse={index % 2 !== 0}
        ></LawersDetailedCard>
      ))}
    </>
  );
}

export default LawyersBioCard;
