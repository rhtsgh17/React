import React from "react";

export default function Card (nomor, nama_Latin, nama, jumlah_Ayat,tempat_Turun,arti) {
    return (
        <React.Fragment>
            <div>
                <div>{nomor}</div>
                <div>{nama_Latin}</div>
                <div>{nama}</div>
                <div>{jumlah_Ayat}</div>
                <div>{tempat_Turun}</div>
                <div>{arti}</div>
            </div>

        </React.Fragment>
    )
}