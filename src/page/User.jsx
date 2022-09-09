import React from "react";
import axios from "axios";
export default function User () {
    
    const [users, setUsers] = React.useState([]);  //state utk menyimpan data dari user api
        const [page, setPage] = React.useState(1);
    const getUserHandle = async() => {
            try{
                const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
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
          
            <table className="table-auto">
                <thead>
                    <tr className="text-left border">
                        <th>No</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                   {users.map((user, index) => {
                    return (
                        <tr key={index} className="text-left border">
                        <td>{index + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
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