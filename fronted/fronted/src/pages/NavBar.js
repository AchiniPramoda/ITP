import React from 'react'
import './Navbar.css'
import Logo from '../assets/Logo.jpeg'

export default function Navbar() {
  return (
       <div>
      
       {/* add logo */}

       <img src={Logo} width={200} height={150} />
       <div className="my">
</div>

    <nav>
       
      <ul className="list">
          <li className="items">Home</li>
          <li className="items">About Us</li>
          <li className="items">Laboratory</li>
          <li className="items">Pharmacy</li>
          <li className="items">Contact Us</li>
         

        </ul>
      <button className="btn">BTN</button>
    </nav>
       </div>
  )
}