import { useParams, Link } from "react-router-dom";

export default function CarDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Car was deleted: {id}</p>
      <Link to={`/carlist`}>
        <p>View other cars</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
