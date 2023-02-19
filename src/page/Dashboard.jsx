import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { GetProduct } from '../API/login_API/DashboardApi';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

export default function Dashboard() {
  const navigate = useNavigate();
  const author = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  const [listProduct, setListProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    kategori: '',
    keyword: '',
    hargaTerendah: '',
    hargaTertinggi: '',
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const getProduct = async (e) => {
    // e.preventDefault()
    try {
      setFetchProduct(true);
      const response = await GetProduct(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      console.log('response =>', response);
      console.log('product =>', response.data.data.rows);
      setListProduct(response.data.data.rows);
      // setPayload(response.data.data.rows)
    } catch (err) {
      console.log('err =>', err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getProduct();
  }, [
    payload.kategori,
    payload.hargaTerendah,
    payload.hargaTertinggi,
    payload.keyword,
  ]);

  console.log('listProduct =>', listProduct);
  console.log('payload =>', payload);
  return (
    <div className="">
      <header className="sticky top-0 z-50 bg-green-500 w-screen h-16 ">
        <div className="flex justify-between ">
          <div className="flex p-2 justify-between">
            <p className="text-white mt-0 text-4xl">Rohmats</p>
            <div className="flex">
              <p className="text-base">{author?.email}</p>
              <p className="text-base">{author?.name}</p>
            </div>
          </div>
          <div className="p-3">
            <input
              name="keyword"
              type="text"
              className="w-[500px] h-10 p-2 rounded-md "
              placeholder="cari barang "
              onChange={handleChange}
              value={payload.keyword}
            />
          </div>
          <div className="flex items-center space-x-3">
            <div
              onClick={() => {
                return navigate('/keranjang', { replace: true });
              }}
            >
              <BsFillCartPlusFill className="w-20 h-10" />
            </div>
            <div>
              <button className="border border-black w-10 h-10 bg-white rounded-full"></button>
            </div>
          </div>
          {/* <div></div> */}
        </div>
      </header>
      <form>
        <body className="flex space-x-3">
          <div className="border sticky top-[70px] border-blue-500 h-[300px] w-[190px] mb-2 mt-2 ml-2 bg-green-500 ">
            <div className=" w-[200px] ">
              <select
                className="border w-[100]"
                onChange={handleChange}
                name="kategori"
                value={payload.kategori}
              >
                <option value={''}> Pilih kategori</option>
                <option value={'tas'}> Pilih tas</option>
                <option value={'mobil'}> Pilih mobil</option>
                <option value={'motor'}> Pilih motor</option>
                <option value={'handphone'}> Pilih handphone</option>
                <option value={'televisi'}> Pilih televisi</option>
              </select>
              <input
                type="number"
                placeholder="hargaTertinggi"
                value={payload.hargaTertinggi}
                onChange={handleChange}
                className="w-[155px] border p-3 bg-white-500 text-black text-center m-2"
                name="hargaTertinggi"
              />
              <input
                type="number"
                placeholder="hargaTerendah"
                value={payload.hargaTerendah}
                onChange={handleChange}
                className="w-[155px] border p-3 bg-white-500 text-black text-center"
                name="hargaTerendah"
              />

              <button
                className="w-[155px] border p-3 bg-white text-black text-center m-2"
                onClick={(e) => {
                  e.preventDefault()
                  return setPayload({
                    hargaTerendah: '',
                    hargaTertinggi: '',
                    kategori: '',
                    keyword: '',
                  });
                }}
              >
                Reset Harga
              </button>
            </div>
          </div>
          <div className="mt-1">
            <div className="grid grid-cols-5 gap-4 overflow-y-visible">
              {listProduct.length === 0 ? (
                <div className="w-screen h-screenx">
                  <h1 className="font-medium text-black items-center text-center">
                    Barang Tidak di temukan
                  </h1>
                </div>
              ) : (
                listProduct?.map((item, index) => {
                  let converter = require('rupiah-format');
                  let harga = item.harga;
                  let hargaConvert = converter.convert(harga);
                  const gila = item.gambarProduk;
                  const banget = JSON.parse(gila);
                  return (
                    <button
                      onClick={() => {
                        return navigate(`/produk/detail/${item.uuid}`);
                      }}
                    >
                      <div className="border border-green-500 w-[220px] h-[310px] mt-2 rounded-lg overflow-y-hidden overflow-x-hidden bg-green-200">
                        <div className="border-b border-green-500 h-[100px] bg-gray-100">
                          <img
                            src={banget[0].gambar1}
                            alt="gambar"
                            className="ml-6 mt-5 mr-2 h-[70px] w-[150px] "
                          />
                        </div>{' '}
                        <p className="text-sm  w-[180px] mt-2 ml-2 font-medium">
                          {item.namaProduk}
                        </p>
                        <p className="text-sm font-bold ml-2 ">
                          {hargaConvert}
                        </p>
                        <div className="flex">
                          <p className="text-sm font-semibold ml-2 ">
                            Kategori : {item.kategori}
                          </p>
                          <p className="text-sm font-semibold ml-2 ">
                            Stok : {item.stok}
                          </p>
                        </div>
                        <div className="flex">
                          {' '}
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                            value={item.rating}
                          />
                          ,<p className="ml-2 ">{item.rating}</p>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </body>
      </form>
    </div>
  );
}
