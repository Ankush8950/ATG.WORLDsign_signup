import React from 'react'
import header_images from "../image/Rectangle-1.png"
import "./Header.css"

const Header = () => {
    return (
        <>
        <div className="header">
          <div className="card">
            <img src={header_images} className="card-imges-top" alt="Header-pho" />
            <div className="card-bodys">
            <div className="card-body">
            <h5 className="card-title">Computer Engineering</h5>
            <p className="card-text">142,765 Computer Engineers follow this</p>
          </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default Header;
