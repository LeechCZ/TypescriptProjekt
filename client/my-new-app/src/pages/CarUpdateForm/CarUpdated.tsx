import { Link, useParams } from "react-router-dom";

export default function CarUpdated() {
  const { id } = useParams();

  return (
    <>
      <p>Your car {id} was updated</p>
      <Link to={`/car/${id}`}>
        <p>View car</p>
      </Link>
    </>
  );
}
