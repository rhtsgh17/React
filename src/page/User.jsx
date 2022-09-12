import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function User () {
    
    const [users, setUsers] = React.useState([]);  //state utk menyimpan data dari user api
        const [page, setPage] = React.useState(100);
    const getUserHandle = async() => {
            try{
                const response = await axios.get(`https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`);
                console.log("response =>" , response.data);
                setUsers(response.data.data);
                setPage(response.data.page)
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
            <h1>Tabel User</h1>
            <Link to="/user/create">
                <p className="bg-yellow-300">Tambah User</p> 
                </Link>
            <table className="table-auto">
                <thead>
                    <tr className="text-left border">
                        <th className="pr-5">No</th>
                        <th className="pr-5">Username</th>
                        <th className="pr-5">Email</th>
                        <th className="pr-5">Jenis_kelamin</th>
                        <th className="pr-5">Di buat</th>
                        <th className="pr-5">Di Update</th>
                    </tr>
                </thead>
                <tbody>
                   {users.map((user, index) => {
                    return (
                        <tr key={index} className="text-left border">
                        <td>{index + 1}</td>
                        <td>{user.Username}</td>
                        <td>{user.Email}</td>
                        <td>{user.Jenis_kelamin}</td>
                        <td>{user.Dibuat}</td>
                        <td>{user.Diupdate}</td>
                        <td>
                            <img className="rounded-full h-5 w-5" src={user.avatar} alt={user.avatar} />
                        </td>
                        <td><button>Detail</button></td>
                    </tr>
                    );
                   })}
                </tbody>
            </table>
            <p>Saat ini di page {page}</p>
            <div className="flex items-center justify-center">
                <button onClick={() => {
                    setPage(page  -1);
                }}>Previos</button>
                <button onClick={() => {
                    setPage(page  +1);
                }}> Next</button>
            </div>
        </div>
    )
}