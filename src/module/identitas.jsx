import React from "react";

export default function Identitas({nama = "siswa", kelas = "x", nilai}) {
    return (
        <div className='identitas'>
        <p>Name : {nama}</p>
        <p>Kelas : {kelas}</p>
        <p>Nilai : {nilai}</p>
      </div>
    );
}