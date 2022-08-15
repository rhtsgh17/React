import React from "react";
// import Button from "./button";
export default function Input({data}){
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
    };
    return(
        <React.Fragment>
            <div>
            {/* <p>Username: {value?.name}</p>
            <p>Email: {value?.email}</p>
            <p>Password: {value?.password}</p>
            <p>ConfirmPassword: {value?.confirmPassword}</p> */}
            {data?.map((item,i) =>{
                return(
                    <div>
                        <p>ID: {item?.id}</p>
                        <p>Username: {item.username}</p>
                        <p>Email: {item.email}</p>
                        <p>TanggalLahir: {item.TanggalLahir}</p>
                        <p>TempatLahir: {item.TempatLahir}</p>
                        <p>JenisKelamin: {item.JenisKelamin}</p>
                        <p>Password: {item.password}</p>
                        <p>ConfirmPassword: {item.confirmPassword}</p>
                        <button value={item?.id}onClick={handleDelete} title={"Delete"}/>
                        <button title={"Update"}/>
                    </div>
                )
            })}
            </div>
        </React.Fragment>
    )
}