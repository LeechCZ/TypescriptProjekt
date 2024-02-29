import { Link, useParams, useNavigate } from "react-router-dom";
import { getCar, CarType, updateCar } from "../../models/Car";
import { useState, useEffect } from "react";

export default function CarUpdateForm() {
  const { id } = useParams();
  const [car, setCar] = useState<CarType>();
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState<CarType>();
  const [info, setInfo] = useState(String);
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCar(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.data);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const car = await updateCar(id, formData);
    if (car.status === 200) {
      redirectToSuccesPage(id);
    } else {
      setInfo(car.msg);
    }
  };

  const redirectToSuccesPage = (id: string) => {
    navigate(`/updatedcar/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    postForm();
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Car was not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
        <>
          <p>Car is loading...</p>
        </>
      );
  }

  return (
    <>
      <h1>Car update form</h1>
      <p>Car id: {id}</p>
      <form>
      <input
          type="text"
          placeholder="Enter name"
          name="name"
          required
          defaultValue={car.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Enter color"
          name="color"
          required
          defaultValue={car.color}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="Enter horsepower"
          name="horsepower"
          required
          defaultValue={car.horsepower}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleUpdate}>Update Car</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
