import React from "react";

export default function Card({data}){
    console.log('data adalah', data);

    const handleDelete =(e) => {
        e.preventDefault();
        console.log("button delete klik");
        let filter = data.filter((item)  =>{
            return item.id !== parseFloat(e.target.value);
        });

        console.log(filter);
        SVGMetadataElement(() =>{
            return filter;
        })
        console.log('button delete klik')
    }
    return(
        <React.Fragment>
            <div>
          
            {data?.map((item) =>{
                return(
                    <div>
                        <p>ID: {item?.id}</p>
                        <p>Username: {item.username}</p>
                        <p>Email: {item.email}</p>
                         <p>Password: {item.password}</p>
                        <p>ConfirmPassword: {item.confirmPassword}</p>
                        <button value={item?.id}onClick={handleDelete}>Hapus</button>
                    </div>
                )
            })}
            </div>
        </React.Fragment>
    )
}
