import React from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import User from "./page/User";
import Createuser from "./page/CreateUser";
import Updateuser from "./page/UpdateUser";
import Userdetail from "./page/UserDetail";
import Screen from "./page/screen";
import Dashboard from "./page/Dashboard";
import About from "./page/About";
import Login from "./page/login";

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Admin" element={<Screen />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Books" element={<User />}></Route>
            <Route path="Books/Add" element={<Createuser />} />
            <Route path="Books/:id/update" element={<Updateuser />} />
            <Route path="Books/:id/view" element={<Userdetail />} />
            <Route path="About" element={<About />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;