/* eslint-disable react/jsx-no-undef */
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
// import Button from "../komponen/button"
import Button  from "../komponen/button";
import Skeleton from 'react-loading-skeleton';
import { getAllUser } from "../api/user";

export default function User() {
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api
  let navigate = useNavigate()

  const [page, setPage] = React.useState(100);
  const [perPage, setPerPage] = React.useState(2);
  const [isFetchUser, setIsFetchUser] = React.useState(false);
 
  const getUserHandle = async () => {
    try {
      setIsFetchUser(true);
      const response = await getAllUser(page)
      console.log("response => ", response.data);
      setUsers(response.data.data);
      // setPage(response.data.page);
      // setPerPage(response.data.per_page);
    } catch (err) {
      console.log(err);
    }finally{
      setIsFetchUser(false);
    }
  };
const deleteUserHandle = (id) => {
  Swal.fire({
    title: 'Maneh serius?',
    text: "Anda tidak akan dapat mengembalikan ini!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#00ff00',
    cancelButtonColor: '#d33',
    confirmButtonText: 'yakin mau, delete'
  }).then(async(result) => {
    if (result.isConfirmed) {
     try{
      const response = await axios.delete(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`
    );
    console.log('yes delete')
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    );
    getUserHandle()
     }catch (err) {
      Swal.fire(
        'Gagal',
        'User tidak ditemukan',
        'error'
      )
     }
     
    }
  })
  
  console.log('button delete  berjalan', id)
}
  console.log("user => ", users);
  console.log("page => ", page);
  console.log("per page => ", perPage);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <h1>Tabel User</h1>
      <button className="bg-[orange] rounded-lg px-3 py-2">
        {" "}
        <Link to="/user/create">Tambah user</Link>
      </button>

      <table className="table-auto ">
        <thead>
          <tr className="text-left border">
            <th className="pr-5">No</th>
            <th className="pr-5">User Name</th>
            <th className="pr-5">Email</th>
            <th className="pr-5">Jenis Kelamin</th>
            <th className="pr-5">Stored At</th>
            <th className="pr-5">Updated At</th> 
           <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetchUser ? 
          <tr>
            <td colSpan={9}><Skeleton count={5} /></td>
            </tr> : users.map((user, index) => {
            return (
              <tr key={index} className="border">
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.stored_at}</td>
                <td>{user.updated_at}</td>
                <td>
              <Button onClick={() => {
                return navigate(`/user/update/${user.id}`)
              }} color="blue" title={"Edit"}/>
                <Button onClick={() => {
                  deleteUserHandle(user.id)
                }} color="red" title={"Delete"}/>
            </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Saat ini di Page {page}</p>

      <div className="flex items-center justify-center">
        <button
          className="mx-5"
          onClick={() => {
            console.log("running?");
            setPage(page - 1);
          }}
        >
          Previos
        </button>
        <button
          className="mx-5"
          onClick={() => {
            console.log("running?");
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
