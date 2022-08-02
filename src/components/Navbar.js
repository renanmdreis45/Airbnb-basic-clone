import React from "react"
import logo from "../../src/images/airbnb-logo.jpg";

export default function Navbar() {
    return (
        <nav>
            <img src= {logo} alt="" className='nav--logo'/>
        </nav>
    )
}