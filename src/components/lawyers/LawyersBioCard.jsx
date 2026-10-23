import LawersDetailedCard from "./LawersDetailedCard";
import useFetch from "../../hooks/useFetch";

function LawyersBioCard() {
  const {lawyers, loading, error} = useFetch()


  if(error) throw error

  //i should add loading state checking here
  return (
    <>
 {lawyers.map((lawyer) =>(
 <LawersDetailedCard data={lawyer}></LawersDetailedCard>
 ))}

    </>
  );
}

export default LawyersBioCard;
