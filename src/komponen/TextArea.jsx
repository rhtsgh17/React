import React from "react";


export default function Layout({children, tittle}) {
    return (
        <div className="layout">
            <p>ini adalah layout</p>
            {children}
        </div>
    )
}


