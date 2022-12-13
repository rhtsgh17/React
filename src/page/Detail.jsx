import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { GetDetailProduct } from '../API/login_API/DashboardApi';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';import ReactStars from "react-rating-stars-component";
export default function Detail() {
  let { uuid } = useParams();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  let navigate = useNavigate;
  const [payload, setPayload] = React.useState([]);
  const [gambarProduk, setGambarProduk] = React.useState('');

  const getDetailProduk = async () => {
    try {
      const response = await GetDetailProduct(uuid);
      const dataProduk = response.data.data;
      const json = response.data.data.gambarProduk;
      const obj = JSON.parse(json);
      setGambarProduk(obj[0].gambar1);

      console.log('dataProduk =>', dataProduk);
      setPayload(response.data.data);
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailProduk();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // setIsLoading(true);
      const response = await dispatch(Detail());
      console.log('response =>', response);
      if (response?.status === 'Success') {
        return navigate('/keranjang', { replace: true });
      }
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'success',
        title: response?.msg,
      });

      // alert("masih ada yg kosong Silahkan Isi doelu")
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  return (
    <div>
      <header className="bg-green-500 w-screen h-16 flex justify-between">
        <div className="flex p-3 justify-between">
          <p className="text-white mt-0 text-4xl">Rohmats</p>
        </div>
        <div className="mt-3"></div>
        <div className="flex items-center space-x-3">
          <div>
            <button className="border border-black w-10 h-10 bg-white rounded-full">
              
            </button>
          </div>
         
        </div>
        {/* <div></div> */}
      </header>
      <div className="mt-5 ml-3 flex space-x-5">
        <div className="border-black border w-[500px] h-[450px] rounded-md">
          <img src={gambarProduk} alt="" />
        </div>

        <div>
          <h1 className="font-bold text-2xl ">{payload.namaProduk}</h1>
          <h1 className="font-sans text-lg">RP {payload.harga}</h1>
          <div className="">
            <div className="flex ">
            <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            edit={false}
            value={payload.rating}
          />,
              <h1>{payload.rating}</h1>
            </div>
          </div>
          <h1 className="font-bold mt-5 mb-4">DESKRIPSI :</h1>
          <h1 className="whitespace-normal w-[780px] font-normal text-clip text-lg">
            {payload.deskripsi}
          </h1>
          <h1 className="font-mono mt-1 mb-1 font-bold text-md">
            kategori : {payload.kategori}
          </h1>

          <div className="space-x-5 mt-5">
            <button
              className="border-2 w-[100px] h-[30px] border-black bg-green-500 text-white font-bold"
              onClick={handleSubmit}
              onChange={handleChange}
            >
              Beli
            </button>
            <button className="border-2 w-[100px] h-[30px] border-black bg-green-500 text-white font-bold">
              Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


