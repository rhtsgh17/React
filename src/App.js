import React from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import User from "./page/User";
import Createuser from "./page/CreateUser";
import Updateuser from "./page/UpdateUser";
import Userdetail from "./page/Userdetail";
import Screen from "./page/Screen";
import Dashboard from "./page/Dashboard";
import About from "./page/About";

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-7 justify-center">
        <section className="col-span-1"></section>
        <div className="flex flex-col p-5 space-y-10  text-red fixed h-screen w-[10%]">
          <NavLink to={"/Admin/Dashboard"}>Dashboard</NavLink>
          <NavLink to={"/Admin/Buku"}>Buku</NavLink>
          <NavLink to={"/Admin/About"}>About</NavLink>
        </div>
        <div className="col-span-6 pr-3 py-5">
          <Routes>
            <Route path="/" element={<Screen />}>
              <Route path="/Admin/Dashboard" element={<Dashboard />} />
              <Route path="/Admin/Buku" element={<User />}></Route>
              <Route path="/Admin/Buku/Add" element={<Createuser />} />
              <Route path="/Admin/Buku/:id/update" element={<Updateuser />} />
              <Route path="/Admin/Buku/:id/view" element={<Userdetail />} />
              <Route path="/Admin/About" element={<About />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App

