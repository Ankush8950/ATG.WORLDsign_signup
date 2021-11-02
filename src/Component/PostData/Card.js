import React from 'react'
import "./Card.css"
import { BsThreeDots } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Card = ({title,titlehead,names,img1,img2}) =>{
    return (
        <>
        <div className="card_post">
         <div className="container-fluid ">
            <div className="row ">
                <div className="postdata">
              <div className="card" >
                <img src={img1} className="card-img-top" alt="post" />
                <div className="card-body">
                    <h5 className="card-titles">{title}</h5>
                    <div className="row">
                    <div className="col-sm-9 col-md-6 col-lg-10 d-flex  elem">
                    <p className="card-text">{titlehead}</p>
                    </div>
                    <div className="three_icon col-sm-3 col-md-6 col-lg-2">
                           <BsThreeDots/>
                    </div>
                    </div>
                    <p className="card_title">I’ve worked in UX for the better part of Link decade. From now on, I plan to rei…</p>
                    <ul className="nav nav-pills nav-fill m-auto d-flex">
                    <ul className="d-flex post_pro me-auto ">
                    <li className="nav-itemes_img d-flex ">
                    <img src={img2} className="card-img-top" alt="post" />
                    </li>
                    <li className="nav-item d-flex">
                        <Link className="nav-link" to="#">{names}</Link>
                    </li>
                    </ul>
                    <ul className="linkshare d-flex">
                    <li className="nav-itemes d-flex">
                        <Link className="nav-link" to="#"><AiOutlineEye /> 1.4k views </Link>
                    </li>
                    <li className="nav-item d-flex ">
                        <Link className="nav-link disabled " to="#"><FiShare2 /></Link>
                    </li>
                    </ul>
                    </ul>
                </div>
            </div>  
            </div>   
           </div>   
           </div>
           </div>
        
        </>
    )
}

export default Card;
