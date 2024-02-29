import "./MainView.css";
import { Link } from "react-router-dom";
export default function MainView() {
  return (
    <>
      <h1>Main view</h1>
      <Link to={"/carlist"}>
        <p>Go to car list</p>
      </Link>
      <Link to={"/createcar"}>
        <p>Go to car create form</p>
      </Link>
      <p className="mainview-p">Hello world</p>
    </>
  );
}
