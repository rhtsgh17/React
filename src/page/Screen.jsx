import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Button from "../komponen/button";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="grid grid-cols-7 justify-end h-screen">
        <section className="col-span-1"></section>
        <div className="flex flex-col p-5 bg-stone-900 justify-between text-white fixed h-screen w-[13%]">
          <div className="flex flex-col space-y-10">
            <NavLink
              to={"/Admin/Dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "p-3 px-5 underline font-semibold"
                  : "p-3 px-5 text-neutral-400 hover:text-neutral-200 font-medium"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/Admin/Books"}
              className={({ isActive }) =>
                isActive
                  ? "p-3 px-5 underline font-semibold"
                  : "p-3 px-5 text-neutral-400 hover:text-neutral-200 font-medium"
              }
            >
              Books
            </NavLink>
            <NavLink
              to={"/Admin/About"}
              className={({ isActive }) =>
                isActive
                  ? "p-3 px-5 underline font-semibold"
                  : "p-3 px-5 text-neutral-400 hover:text-neutral-200 font-medium"
              }
            >
              About
            </NavLink>
          </div>
          <Button
            title={"Log Out"}
            onClick={() => {
              return navigate("/", { replace: true });
            }}
            add={"bg-white text-stone-900"}
          >
            Log Out
          </Button>
        </div>
        <div className="col-span-6 py-3 px-5">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
