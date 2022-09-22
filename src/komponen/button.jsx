import React from "react";


export default function Button({
    title,
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
            backgroundColor: "color",
            opacity: disabled ? 0.5 : 1
          }}
          className="button-red"
        >
          {title}
        </button>
      </React.Fragment>
    );
  }
