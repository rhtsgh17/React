import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Screen() {
  return (
    <React.Fragment>
      <div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default Screen;