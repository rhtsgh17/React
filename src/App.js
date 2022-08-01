
import React from 'react';
import "./styles/style.css"
import Identitas from './module/identitas';
import Nilai from './module/nilai';
import DataSiswa from './module/dataSiswa';
function App() {
  let [data, setData] = React.useState([10,20,30,40,50])
  const [dataSiswa, setDataSiswa] = React.useState([
    {
    nama : "rohmats",
    kelas : "Xi RPL",
    nilai : 100,
  },
  {
    nama : "kevin",
    kelas : "Xi RPL",
    nilai : 98,
  },
  {
    nama : "abimanyu",
    kelas : "Xi RPL",
    nilai : 99,
  },
]);

const [nilaiSiswa, setNilaiSiswa] = React.useState({
  nama: "saddil",
  kelas: "xii tkj",
  nilai: [97, 99, 100, 96,98, 95],
})
  return (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className='section'>
        <div>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        <Identitas nama={'Rohmats'} kelas={'XI RPL'} nilai={100}/>
        </div>
        
        <Nilai nama={'Rohmats'} data={data}/>
        <DataSiswa data={dataSiswa} nilai={nilaiSiswa}/>
      </section>
    </React.Fragment>
  );
}

export default App;

// name export bisa lebih dari 1
// harus pake kurung kurawal
// namanya harus sama