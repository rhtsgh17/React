import React from 'react'

export default function Card({count, setCount}) {
    
    const handleMaju = () =>{
        setCount(count+1)
    }
    const handleMundur =() => {
        setCount(count-1)
    }
    return(
        <React.Fragment>
            <p>Card</p>
            {count}
            
            <h3>{count <= 10? "Kurang dari sepuluh" :
             "Lebih dari sepuluh"}</h3>
            <button onClick={handleMaju}>Maju</button>
            <button onClick={handleMundur}>Mundur</button>
        </React.Fragment>
    )
}