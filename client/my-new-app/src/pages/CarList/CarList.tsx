import { Link } from "react-router-dom";
import { CarLink } from "./CarLink";
import { useEffect, useState } from "react";
import { CarType, getCars } from "../../models/Car";

export default function CarList() {
  const [cars, setCars] = useState<CarType[]>();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const req = await getCars();
    if (req.status === 500) return setLoaded(null);
    if (req.status === 200) {
      setCars(req.data);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Cars not found</p>
      </>
    );
  }
  if (!loaded) {
    return (
      <>
        <p>Loading cars.....</p>
      </>
    );
  }

  return (
    <>
      <h2>Car list</h2>
      {cars.map((car, index) => (
        <CarLink carId={car._id} carName={car.name} key={index} />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
