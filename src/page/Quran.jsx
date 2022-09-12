// import React from "react";
// import axios from "axios";
// export default function Quran () {
    
//     const [users, setUsers] = React.useState([]);  //state utk menyimpan data dari user api
//         const [page, setPage] = React.useState(1);
//     const getUserHandle = async() => {
//             try{
//                 const response = await axios.get(`https://equran.id/api/surat`);
//                 console.log("response =>" , response.data);
//                 setUsers(response.data);
                
//             }
//             catch(err) {

//             }
//         };
//         console.log('user =>', users);
//         console.log('page =>', page);

//         React.useEffect(() => {
//             getUserHandle();
//         }, [page]);
//     return (
//         <div>
//             <h1>Tabel Quran</h1>
//           <div>
//             {users.map((user, index) => {
//                     return (
//                         <tr key={index} className="text-left border">
//                         <td>{index + 1}</td>
//                         <td>{user.nomor}</td>
//                         <td>{user.nama}</td>
//                         <td>{user.nama_latin}</td>
//                         <td>{user.jumlah_ayat}</td>
//                         <td>{user.tempat_turun}</td>
//                         <td>{user.arti}</td>
                       
//                         <td>
//                             <img className="rounded-full h-5 w-5" src={user.avatar} alt={user.avatar} />
//                         </td>
//                         <td><button>Detail</button></td>
//                     </tr>
//                     );
//                    })}
//           </div>
//         </div>
//     )
// }

import React from "react";
import axios from "axios";
import Card from "./card";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://equran.id/api/surat`);
      console.log("Response =>", response.data);

      setUsers(response.data);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section className="bg-gray-900 w-screen h-full px-15 py-15 pb-15">

      <h1 className="text-[50px] text-white font-bold pb-15 text-center">
        DAFTAR SURAT<span className="text-violet-500">.</span>
      </h1>
      <div className="flex justify-center">
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.map((item, index) => {
          return (
            <div>
              <Card
                namaLatin={item.nama_latin}
                arti={item.arti}
                jumlahAyat={item.jumlah_ayat}
                tempatTurun={item.tempat_turun}
                nama={item.nama}
                nomor={item.nomor}
              />
            </div>
          );
        })}
      </section>
      </div>
        <p className="text-end text-gray-500 pr-[40px] pt-10">@Rohmats.</p>
    </section>
  );
};

export default User;