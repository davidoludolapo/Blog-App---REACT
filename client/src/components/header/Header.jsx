import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerBg">
        <img src="https://i.ibb.co/pydcNqT/king.jpg" alt="" className="imgBg" />
      </div>
      <div className="headerContent">
        <h2>The King's Pride</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque saepe voluptatum sunt reprehenderit sed optio minus cum animi! </p>
      <button className="btnPrimary">Read Article</button>
      </div>

    </div>
  );
}

export default Header;
