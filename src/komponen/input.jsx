// import React from "react";

// export default function Input({label, isError, textError, ...props}) {
//   return (
//     <div className="input">
//      <label className="label" htmlFor={label}>
//         {label}
//      </label>
//       <input {...props} className="input-text" id={label}/>
//       {isError &&  <p className="error">{textError}</p>}
//      </div>
//   );
// }
 
// Murojaah
import React from "react";

export default function Input({label, isError, textError, ...props}) {
  return(
    <div className="input grid">
      <label className="label" htmlFor={label}>
        {label}
      </label>

      <input {...props} className=" border rouded-md mt-5 w-4/5" id={label} />

      {isError && <p className="error">{textError}</p>}
    </div>
  );
}