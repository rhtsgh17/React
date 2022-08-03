import React from "react";

// export default function Button({
//   tittle,
//   color = "red",
//   onClick,
//   nama,
//   id,
//   disabled,
// }) {
//   return (
//     <React.Fragment>
//       <button
//         onClick={onClick}
//         nama={nama}
//         id={id}
//         disabled={disabled}
//         style={{
//           backgroundColor: "red",
//         }}
//         className="button"
//       >
//         {tittle}
//       </button>
//     </React.Fragment>
//   );
// }


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
            backgroundColor: "color",
            opacity: disabled ? 0.5 : 1
          }}
          className="button"
        >
          {tittle}
        </button>
      </React.Fragment>
    );
  }
