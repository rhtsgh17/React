import React, { useState, memo, useCallback, useMemo } from "react";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Rohmats 17");
  console.log("parent render");

  const handleCount = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const prosesBerat = (count) => {
    if (count < 20000000) {
      console.log("berjalan");
    }

    return count + 1;
  };

  const prosesBeratMemo = useMemo(() => {
    return prosesBerat(count);
  }, [count]);

  return (
    <div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="block p-6 rounded-lg shadow-2xl bg-[#BCE29E] max-w-sm border-4 border-r-green-500 border-l-yellow-500  border-b-blue-500 border-t-orange-500">
          <h1>parent</h1>
          <h5>Count : {count}</h5>
          <p>Count 2 : {prosesBeratMemo}</p>

          <button
            className="inline-block mt-4 ml-4 px-6 py-2 border-2 border-r-yellow-500 border-l-green-500  border-b-yellow-500 border-t-orange-500 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={() => {
              setCount((c) => c + 1);
            }}
          >
            Tambah
          </button>
          <button
            className="inline-block mt-4 ml-4 px-6 py-2 border-2 border-r-blue-500 border-l-red-500  border-b-blue-500 border-t-red-500 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={() => {
              setCount((c) => c - 1);
            }}
          >
            Kurang
          </button>
          <MemorizedChild user={user} handleCount={handleCount} />
        </div>
      </div>
      <button
        className="bg-green-500 text-white px-3 py-1"
        onClick={() => {
          setUser("green");
        }}
      >
        hijau
      </button>
      <button
        className="bg-red-500 text-white px-3 py-1"
        onClick={() => {
          setUser("merah");
        }}
      >
        merah
      </button>
      <button
        className="bg-blue-500 text-white px-3 py-1"
        onClick={() => {
          setUser("blue");
        }}
      >
        biru
      </button>
    </div>
  );
}

const MemorizedChild = memo(Child);

function Child({ user, handleCount }) {
  console.log("child render");

  return (
    <div>
      <h2>Nama</h2>
      <p>User : {user}</p>
      <button
        onClick={handleCount}
        className="bg-blue-500 text-white px-3 py-1"
      >
        Tambah Count from Child
      </button>
    </div>
  );
}

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
