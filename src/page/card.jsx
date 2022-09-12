// import React from "react";

// export default function Card (nomor, nama_Latin, nama, jumlah_Ayat,tempat_Turun,arti) {
//     return (
//         <React.Fragment>
//             <div>
//                 <div>{nomor}</div>
//                 <div>{nama_Latin}</div>
//                 <div>{nama}</div>
//                 <div>{jumlah_Ayat}</div>
//                 <div>{tempat_Turun}</div>
//                 <div>{arti}</div>
//             </div>

//         </React.Fragment>
//     )
// }

import React from "react";

function Card({ nomor, namaLatin, jumlahAyat, tempatTurun, arti, nama }) {
  return (
    <React.Fragment>
      <div className="bg-white-800 p-3 w-[300px] h-[200px] rounded-2xl text-green grid content-between border-gray-500 border-b-2 hover:border-b-4 hover:border-violet-500">
        <div className="rounded-full border-violet-600 flex flex-row justify-between">
          <p>
            {nomor}. {namaLatin}
          </p>
          <p>{arti}</p>
        </div>
        <div className="h-[2px] bg-gray-500"></div>
        <div className="flex flex-row justify-between text-gray-500 capitalize">
          <p>{tempatTurun}</p>
          <p>{jumlahAyat} Ayat</p>
        </div>
        <div className="flex-col flex w-full">
          <p className="text-[65px] text-violet-600 self-end">{nama}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;