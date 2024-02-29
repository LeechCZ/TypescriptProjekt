import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CarType, getCar, deleteCar } from "../../models/Car";

export default function CarView() {
  const { id } = useParams();
  const [car, setCar] = useState<CarType>();
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState(String);
  const [deletFormData, setDeletFormdata] = useState(String);
  const navigate = useNavigate();

  const load = async () => {
    const req = await getCar(id);
    if (req.status === 500) return setLoaded(null);
    if (req.status === 200) {
      setCar(req.data);
      setLoaded(true);
    }
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (deletFormData === car.name) {
      const req = await deleteCar(id);
      if (req.status === 200) {
        redirectToDeletePage(car._id);
      } else {
        setInfo("Auto se nepodarilo smazat");
      }
    } else {
      setInfo("Zadejte spravne jmeno auto pro smazani");
    }
  };

  const redirectToDeletePage = (carId: string) => {
    return navigate(`/cardeleted/${carId}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeletFormdata(e.target.value);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded == null) {
    return (
      <>
        <p>Car not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Car is loading</p>
      </>
    );
  }

  return (
    <>
      <h1>{id}</h1>
      <p>{car.name}</p>
      <p>{car.horsepower}</p>
      <p>{car.color}</p>
      <form>
        <p>Abyste smazali auto, zadejte prosim jmeno auta</p>
        <input type="text" placeholder={car.name} onChange={handleChange} />
        <button onClick={handleDelete}>
          Smazat auto
        </button>
        <p>{info}</p>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
