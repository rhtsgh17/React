import React, { useState, useEffect } from "react";
// import usePage from "./hook/usePage";
import useList from "./hook/useList";
import useJuzz from "./hook/useJuzz";

function App() {
  const { alquran } = useList();
  const { alquran : mushaf, setJuzz, juzz } = useJuzz(1);
  console.log("alquran", alquran);
  return (
    <React.Fragment>
      <h1 className="bg-orange-500">Hook Materi</h1>
     <h2 className="font-bold">{juzz}</h2>
   <button className="bg-green-500" onClick={() => setJuzz((juzz) => juzz + 1)}>Ubah Juzz</button>
    </React.Fragment>
  );
}

export default App;
