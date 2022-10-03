import React from "react";
import Swal from "sweetalert2";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function Createuser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUser] = React.useState({
    kode_penulis: "33333",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: parseInt(),
    sinopsis: "",
  });

  const handleChange = (e) => {
    setUser((users) => {
      return { ...users, [e.target.name]: e.target.value };
    });
    console.log("tes");
  };
  const [errorForm, setErrorForm] = React.useState("");
  const [error, setError] = React.useState({});
  const [errorSin, setErrorSin] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    if (users.sinopsis.length <= 10) {
      setErrorSin("Sinopsis harus berisikan minimal 30 karater");
    } else {
      setErrorSin("");
    }

    if (
      users.judul_buku === "" ||
      users.ketebalan_buku === "" ||
      users.nama_penerbit_buku === "" ||
      users.nama_pengarang === "" ||
      users.sinopsis === "" ||
      users.tahun_terbit_buku < 2002 ||
      users.tahun_terbit_buku > 2021 || users.sinopsis.length < 10
    ) {
      setErrorForm("There's Empty Form");
      if (users.ketebalan_buku === "") {
        setError((errors) => {
          return {
            ...errors,
            ketebalan_buku: true,
          };
        });
      }
      if (users.judul_buku === "") {
        setError((errors) => {
          return {
            ...errors,
            judul_buku: true,
          };
        });
      }
      if (users.nama_penerbit_buku === "") {
        setError((errors) => {
          return {
            ...errors,
            nama_penerbit_buku: true,
          };
        });
      }
      if (users.nama_pengarang === "") {
        setError((errors) => {
          return {
            ...errors,
            nama_pengarang: true,
          };
        });
      }
      if (users.sinopsis === "") {
        setError((errors) => {
          return {
            ...errors,
            sinopsis: true,
          };
        });
      }
      if (
        users.tahun_terbit_buku < 2002 ||
        users.tahun_terbit_buku > 2021 ||
        users.tahun_terbit_buku === ""
      ) {
        setError((errors) => {
          return {
            ...errors,
            tahun_terbit_buku: true,
          };
        });
      }
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api-react-2.herokuapp.com/api/perpustakaan`,
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
        className: "border-2 border-red",
        icon: "success",
        title: "Success Creating New Book",
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
        title: "Failed Creating New Book",
      });
      setIsLoading(false);
      setUser({
        kode_penulis: "33333",
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit_buku: "",
        sinopsis: "",
      });
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "")
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    else
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
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
          tahun_terbit_buku: 2004,
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
      <p className="text-center font-bold uppercase mt-5">Book Baru</p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className=" space-y-3 w-full h-[510px] p-5"
        >
          <p className="w-full bg-red-600 text-center text-white px-5">
            {errorForm}
          </p>
          <div className="flex w-full flex-row space-x-2">
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              isError={error.nama_pengarang}
              value={users.nama_pengarang}
              label="Nama"
              type="text"
              name="nama_pengarang"
              id="nama"
              placeholder="Nam"
            />

            <Input
              onBlur={handleBlur}
              isError={error.nama_penerbit_buku}
              onChange={handleChange}
              value={users.nama_penerbit_buku}
              label="Publick"
              type="text"
              name="nama_penerbit_buku"
              id="Publick"
              placeholder="Publick"
            />
          </div>
          <div>
            <Input
              onBlur={handleBlur}
              isError={error.judul_buku}
              onChange={handleChange}
              value={users.judul_buku}
              label="Buku judul"
              type="text"
              name="judul_buku"
              id="Buku judul"
              placeholder="Buku judul"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.ketebalan_buku}
              onBlur={handleBlur}
              isError={error.ketebalan_buku}
              label="Ketebalan_buku"
              type="text"
              name="ketebalan_buku"
              id="Ketebalan_buku"
              placeholder="Ketebalan_buku"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.sinopsis}
              onBlur={handleBlur}
              isError={error.sinopsis}
              label="Sinopsis"
              type="text"
              name="sinopsis"
              id="Sinopsis"
              placeholder="Sinopsis"
            />
            <p className="text-white text-[10px] w-full bg-orange-600 text-center">
              {errorSin}
            </p>
          </div>
          <div className="flex flex-row space-between space-x-2">
            <Input
              onChange={handleChange}
              value={users.tahun_terbit_buku}
              onBlur={handleBlur}
              isError={error.tahun_terbit_buku}
              label="tahun_terbit_buku"
              type="number"
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
              name="kode_penulis"
              id="kode_penulis"
              placeholder="kode_penulis"
            />
          </div>

          <div className="flex flex-row justify-between">
            <Button
              onClick={() => {
                return navigate(`/Admin/Books`, {
                  replace: true,
                });
              }}
              title="Cancel"
            >
              Cancel
            </Button>

            <Button title={isLoading ? "Submitting" : "Submit"} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Createuser;