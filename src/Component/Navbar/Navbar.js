import React ,{ useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import Create from '../Create-account/Create-acc'
import Union from "../image/Union 1.png"

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <>
        <div className="main_screen">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid b-2 ">
                <Link className="navbar-brands"><span className="logo_nav">ATG.</span>W<span className="logo_navbar"><img src={Union} className="logo_navbar" alt="logo" /></span>RLD</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="d-flex" >
                <input className="mainLoginInput me-2" type="search" placeholder="&#61442;  Search for your favorite groups in ATG" aria-label="Search" />
                </li>
                </ul>

                <li className="nav-item  d-flex" onClick={ () => setMenu(true)}>
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Create account.<Link to="#" className="link_dropDown"> Its,free!</Link>
                    </Link>
                    </li>
                </div>
            </div>
        </nav>
        </div>
        <div className={menu ? "Sign_up_show" : "Sign_up_hide"}>
            <Create 
             close={() => setMenu(false)}           
            />
        </div>
        </>
    )
}

export default Navbar;
