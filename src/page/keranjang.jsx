import React from 'react';

export default function Keranjang() {
    const [gambarProduk, setGambarProduk] = React.useState('');
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
      
      </header>
      <div className="mt-5 ml-3 flex space-x-5">
        <div className="border-black border w-[200px] h-[150px] rounded-md">
          <img src={gambarProduk} alt="" />
        </div>
        <div className='text-lg p-5'>
            <p>Nama Barang</p>
        </div>
        <div className='p-5'>
            <button className="border-black border w-[30px] h-[30px] rounded-md bg-gray-100">
                -
            </button>
            
            </div>
            <div className='p-5'>
                <p>1</p>
                </div>
                <div className='p-5'>
            <button className="border-black border w-[30px] h-[30px] rounded-md bg-gray-100">
                +
            </button>
            
            </div >

            <div className='text-lg p-5'>
                <p>Rp. 17.000.171</p>
            </div>
           <div className='p-5'>
           <button className="border-2 w-[100px] h-[30px] border-black bg-green-500 text-white font-bold">
              Checkout
            </button>
           </div>
      </div>
    </div>
  );
}
