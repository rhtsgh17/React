import React from "react";

function Select({ children, label,...props }) {
  return (
    <div>
        <p>{label}</p>
      <select
        {...props}
        name="jenis_kelamin"
        id=""
        className="p-3 border-b px-0 w-full border-black"
      >
        {children}
      </select>
    </div>
  );
}

export default Select;