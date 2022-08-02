import React from "react"
import grid from "../../src/images/photo-grid.png"

export default function Hero() {
    return (
     <section className="hero">
        <img src= {grid} alt="" className= "hero--photo" />
        <h1 className="hero--header"> Online Experiences </h1>
        <p> Join unique interactive activities led by one-of-a-kind hosts -all without leaving home </p>
     </section>
    )
}