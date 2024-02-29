import { HashRouter, Routes, Route } from "react-router-dom";
import MainView from "../MainView/MainView";
import CarList from "../CarList/CarList";
import CarView from "../CarView/CarView";
import CarUpdateForm from "../CarUpdateForm/CarUpdateForm";
import CarCreateForm from "../CarCreateForm/CarCreateForm";
import CarCreated from "../CarCreateForm/CarCreated";
import CarDeleted from "../CarView/CarDeleted";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/car/:id" element={<CarView />} />
        <Route path="/createcar" element={<CarCreateForm />} />
        <Route path="/carcreated/:id" element={<CarCreated />} />
        <Route path="/cardeleted/:id" element={<CarDeleted />} />
        <Route path="/updatecar/:id" element={<CarUpdateForm />} />
      </Routes>
    </HashRouter>
  );
}
