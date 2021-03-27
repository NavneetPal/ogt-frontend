import React from 'react'

import './Breadcrumb.css'
function Breadcrumb({text}) {
    return (
        <>
        <div className="breadcumb-image">
            <div className="bg-overlay" style={{backgroundColor:'transparent'}}></div>
            <div className="breadcumb-title">
                <h2 className="font-bold text-uppercase">{text}</h2>
            </div>
        </div>
        </>
    )
}

export default Breadcrumb
