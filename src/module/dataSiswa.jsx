import React from "react";

export default function DataSiswa({ data, nilai }) {
  return (
    <React.Fragment>
      ini komponen data siswa
      {data?.map(function (item, index) {
        return (
          <div className="identitas">
            <p>Nama: {item.nama}</p>
            <p>Kelas: {item.kelas}</p>
            <p>Nilai: {item.nilai}</p>
          </div>
        );
      })}
      <div>
        <p>Nama: {nilai.nama}</p>
        <p>kelas: {nilai.kelas}</p>
        
        <div>
            nilai adalah
            {nilai.nilai.map((item) =>{
                return <p>{item}</p>;
            })}
        </div>
      </div>
    </React.Fragment>
  );
}
