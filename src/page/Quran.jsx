import React from "react";
import axios from "axios";
export default function Quran () {
    
    const [users, setUsers] = React.useState([]);  //state utk menyimpan data dari user api
        const [page, setPage] = React.useState(1);
    const getUserHandle = async() => {
            try{
                const response = await axios.get(`https://equran.id/api/surat`);
                console.log("response =>" , response.data);
                setUsers(response.data);
                
            }
            catch(err) {

            }
        };
        console.log('user =>', users);
        console.log('page =>', page);

        React.useEffect(() => {
            getUserHandle();
        }, [page]);
    return (
        <div>
            <h1>Tabel Quran</h1>
          <div>
            {users.map((user, index) => {
                    return (
                        <tr key={index} className="text-left border">
                        <td>{index + 1}</td>
                        <td>{user.nomor}</td>
                        <td>{user.nama}</td>
                        <td>{user.nama_latin}</td>
                        <td>{user.jumlah_ayat}</td>
                        <td>{user.tempat_turun}</td>
                        <td>{user.arti}</td>
                       
                        <td>
                            <img className="rounded-full h-5 w-5" src={user.avatar} alt={user.avatar} />
                        </td>
                        <td><button>Detail</button></td>
                    </tr>
                    );
                   })}
          </div>
        </div>
    )
}