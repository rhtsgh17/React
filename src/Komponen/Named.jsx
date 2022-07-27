import React from "react";
import '../styles/style.css'
function Button(){
    return(
        <React.Fragment>
            <button style={{
                backgroundColor : 'greenyellow',
                color : 'white',
                padding: '4px 2px',
            }}>Simpan</button>
        </React.Fragment>
    );
}


function Input(){
    return(
        <React.Fragment>
            <input className="input" placeholder="input ..."/>
        </React.Fragment>
    );
}

export {Button,Input};