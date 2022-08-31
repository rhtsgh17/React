import React from "react";

export default function Button({
    tittle,
    bg = "green",
    disabled,
  ...props
  }) {
    return (
     
        <button
        {...props}
        disabled={disabled}
         
          style={{
            backgroundColor: bg,
            opacity: disabled ? 0.8 : 1
        
          }}
          className="w-full border } text-white py-1 rounded-md"
        >
          {tittle}
        </button>
    
    );
  }

