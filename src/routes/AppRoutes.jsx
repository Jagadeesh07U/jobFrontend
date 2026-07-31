import { Routes, Route } from "react-router-dom";
import AddJob from "../pages/AddJob";
import EditJob from "../pages/EditJob";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/jobs"
        element={<Jobs />}
      />

      <Route
        path="/jobs/:id"
        element={<JobDetails />}
      />
      <Route
        path="/add-job"
        element={<AddJob/>}
      />

      <Route
        path="/edit-job/:id"
        element={<EditJob/>}
      />  

      <Route
       path="/register"
       element={<Register/>}
      />

      <Route
       path="/login"
       element={<Login/>}
      />

      <Route
       path="/logout"
       element={<Logout/>}
      />

      <Route
       path="/favorites"
       element={<Favorites/>}
      />




    </Routes>
  );
}

export default AppRoutes;