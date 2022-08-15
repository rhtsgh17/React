import React from "react";

export default function Button({
    tittle,
    color = "blue",
    disabled,
  ...props
  }) {
    return (
      <React.Fragment>
        <button
        disabled={disabled}
         {...props}
          style={{
            backgroundColor: color,
            opacity: disabled ? 0.5 : 1
          }}
          className="button"
        >
          {tittle}
        </button>

        <button
        disabled={disabled}
         {...props}
          style={{
            backgroundColor: "blue",
            opacity: disabled ? 0.5 : 1
          }}
          className="button-blue"
        >
          {tittle}
        </button>
      </React.Fragment>
    );
  }
