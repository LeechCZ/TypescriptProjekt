import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CarType, createCar } from "../../models/Car";
import { useNavigate } from "react-router-dom";

export default function CarCreateForm() {
  const [formData, setFormData] = useState<CarType>();
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const postForm = async () => {
    const car = await createCar(formData);
    if (car.status === 201) {
      redirectToSuccesspage(car.data._id);
    } else {
      setInfo(car.msg);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccesspage = (carId: string) => {
    return navigate(`/carcreated/${carId}`);
  };

  return (
    <>
      <h1>Car create form</h1>

      <form>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Enter color"
          name="color"
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="Enter horsepower"
          name="horsepower"
          required
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create Car</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
