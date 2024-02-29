import { useParams, Link } from "react-router-dom";

export default function CarCreated() {
  const { id } = useParams();

  return (
    <>
      <p>Car was created: {id}</p>
      <Link to={`/car/${id}`}>
        <p>View car</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
