

import React from "react";

function Button({ title, add, ...props }) {
  return (
    <button
      className={`border border- p-2 px-6 hover:bg-black hover:text-white ${add}`}

      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
