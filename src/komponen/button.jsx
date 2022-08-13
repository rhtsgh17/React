import React from "react";

export default function Button({
    tittle,
    color = "red",
    disabled,
  ...props
  }) {
    return (
      <React.Fragment>
        <button
        disabled={disabled}
         {...props}
          style={{
            backgroundColor: "red",
            opacity: disabled ? 0.5 : 1
          }}
          className="button-red"
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
