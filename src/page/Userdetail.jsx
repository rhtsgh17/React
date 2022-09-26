import React from "react";
import Swal from "sweetalert2";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { data } from "autoprefixer";

function CreateUser() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUser] = React.useState({
    kode_penulis: "33333",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
  });

  const handleChange = (e) => {
    setUser((users) => {
      return { ...users, [e.target.name]: e.target.value };
    });
    console.log("tes");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const response = await axios.put(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=33333`,
        users
      );
      setIsLoading(false);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Sukses memperbarui",
      });
      return navigate("/Admin/Books");
    } catch (err) {
      console.log(err);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "gagal memperbarui",
      });
      setIsLoading(false);
      setUser({
        kode_penulis: "33333",
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit_buku: 2004,
        sinopsis: "",
      });
    }
  };

  const getDetailUser = async (id) => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=33333`
      );
      const dataUser = response.data.data;
      console.log(dataUser);
      setUser(() => {
        return {
          kode_penulis: "33333",
          judul_buku: dataUser.judul_buku,
          nama_pengarang: dataUser.nama_pengarang,
          nama_penerbit_buku: dataUser.nama_penerbit_buku,
          ketebalan_buku: dataUser.ketebalan_buku,
          tahun_terbit_buku: dataUser.tahun_terbit_buku,
          sinopsis: dataUser.sinopsis,
        };
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailUser(id);
  }, []);
  return (
    <React.Fragment>
      <p className="text-center font-bold uppercase mt-10">Register</p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-5 w-[400px] h-[510px] border border-green p-5"
        >
          <div className="flex flex-row space-between space-x-[45px]">
            <Input
              onChange={handleChange}
              value={users.nama_pengarang}
              isError={""}
              label="Name"
              type="text"
              disabled
              name="nama_pengarang"
              id="name"
              placeholder="Name"
            />
            <Input
              onChange={handleChange}
              value={users.nama_penerbit_buku}
              isError={""}
              label="Penerbit"
              type="text"
              disabled
              name="nama_penerbit_buku"
              id="Penerbit"
              placeholder="Penerbit"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.judul_buku}
              isError={""}
              label="Book Thickness"
              type="text"
              disabled
              name="judul_buku"
              id="Book Title"
              placeholder="Book Title"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.ketebalan_buku}
              isError={""}
              label="Book Thickness"
              type="text"
              disabled
              name="ketebalan_buku"
              id="BookThickness"
              placeholder="BookThickness"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.sinopsis}
              isError={""}
              label="Sinopsis"
              type="text"
              disabled
              name="sinopsis"
              id="Sinopsis"
              placeholder="Sinopsis"
            />
          </div>
          <div className="flex flex-row space-between space-x-[45px]">
            <Input
              onChange={handleChange}
              value={users.tahun_terbit_buku}
              isError={""}
              label="Year Published"
              type="number"
              disabled
              name="tahun_terbit_buku"
              id="tahun_terbit_buku"
              placeholder="Year Published"
            />
            <Input
              onChange={handleChange}
              value={users.kode_penulis}
              isError={""}
              label="Author Code"
              type="number"
              disabled
              name="kode_penulis"
              id="AuthorCode"
              placeholder="AuthorCode"
            />
          </div>

          <div className="flex flex-row justify-between">
            <NavLink
              to="/Admin/Books"
              className={`border border-red p-2 px-5`}
            >
              Back
            </NavLink>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default CreateUser;