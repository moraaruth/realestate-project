import React from "react"
import "./Popular.css"

function Popular ({titlePhoto, price, estate, location}){
    return (
        <>
        <div className="popular-card">
        <img src={titlePhoto} alt="Box " className="popular-card-image" />
        <br />
        <p>{price}</p>
        <br />
        <p>{estate}</p>
        <br />
        <p>{location}</p>

        </div>
        </>
    )
}

export default Popular;