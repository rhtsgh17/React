import React from "react";

export default function Card({label, isError, textError, ...props}) {
  return(
    
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>

      <input {...props} className="input-text" id={label} />

      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
