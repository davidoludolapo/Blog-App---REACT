import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://i.ibb.co/Zm0MDFw/20.jpg" alt="" className="headerImg" />
    </div>
  )
}

export default Header