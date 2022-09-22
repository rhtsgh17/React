import React from "react";
export default function Produk ({data}) {
    return(
        <React.Fragment>
            <h1>Latihan1</h1>
            {data?.map((item, index) => {
                return (
                   <div key={index}>
                     <div key={index}>
                        <h1>DAta ke {index+ 1}</h1>
                        <h3>jenis : {item.jenis}</h3>
                        <h3>produk {item.produk}</h3>
                    </div>
                     {item?.brand?.map((value, index2) => {
                        return (
                            <div key={index2}>
                            <p>{value.nama}</p>
                            <p>{value.harga}</p>
                            </div>
                        );
                    }
                        )

                    }
                   </div>
                );
            })}
        </React.Fragment>

    );
}