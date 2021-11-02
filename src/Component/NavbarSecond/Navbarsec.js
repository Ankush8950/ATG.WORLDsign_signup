import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbarsec.css"
import { MdGroupAdd } from "react-icons/md";

const Navbarsec = () => {
    return (
        <>
        <div className="Navbar_sec">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="#" activeclassname="active_class">All Posts(32)</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <li className="nav-item dropdown d-flex">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter: All
                    </Link>
                    </li> 
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="#" activeclassname="active_class">Article</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#" activeclassname="active_class">Event</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="#" activeclassname="active_class">Education</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="#" activeclassname="active_class">Job</Link>
                    </li>
                </ul>

                <li className="nav-item dropdown d-flex p-1">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Write a Post
                    </Link>
                    </li>
                    <button type="button" className="btn btn-primary"><MdGroupAdd /> Join Group</button>
                </div>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Navbarsec;
