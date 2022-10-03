import React from "react";
import Swal from "sweetalert2";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { data } from "autoprefixer";

function Createuser() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUser] = React.useState({
    kode_penulis: "10102",
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
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=10102`,
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
        title: "Success Memperbarui buku",
      });
      return navigate("/Admin/Books");
    } catch (err) {
      console.log(err);
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
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
        title: "Gagal memperbarui buku",
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
      <p className="text-center font-bold uppercase mt-10">Book Detail</p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-5 w-[400px] h-[510px] border border-orange p-5"
        >
          <div className="flex flex-row space-between space-x-[45px]">
            <Input
              onChange={handleChange}
              value={users.nama_pengarang}
              isError={""}
              label="Nama"
              type="text"
              disabled
              name="nama_pengarang"
              id="nama"
              placeholder="Nama"
            />
            <Input
              onChange={handleChange}
              value={users.nama_penerbit_buku}
              isError={""}
              label="Publick"
              type="text"
              disabled
              name="nama_penerbit_buku"
              id="Publick"
              placeholder="Publick"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.judul_buku}
              isError={""}
              label="judul_buku"
              type="text"
              disabled
              name="judul_buku"
              id="judul_buku"
              placeholder="judul_buku"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.ketebalan_buku}
              isError={""}
              label="ketebalan_buku"
              type="text"
              disabled
              name="ketebalan_buku"
              id="ketebalan_buku"
              placeholder="ketebalan_buku"
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
              label="tahun_terbit_buku"
              type="number"
              disabled
              name="tahun_terbit_buku"
              id="tahun_terbit_buku"
              placeholder="tahun_terbit_buku"
            />
            <Input
              onChange={handleChange}
              value={users.kode_penulis}
              isError={""}
              label="kode_penulis"
              type="number"
              disabled
              name="kode_penulis"
              id="kode_penulis"
              placeholder="kode_penulis"
            />
          </div>

          <div className="flex flex-row justify-between">
            <Button title="Back" onClick={() => {
              return navigate("/Admin/Books", {replace: true})
            }}></Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Createuser;