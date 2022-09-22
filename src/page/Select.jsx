import React from "react";

export default function Select({
  label,
  isError,
  textError,
  children,
  ...props
}) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>

      <Select {...props} className="input-text border" id={label}>
        {children}
      </Select>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
