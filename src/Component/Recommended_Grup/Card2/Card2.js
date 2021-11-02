import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Card2.css"

const Card2 = ({imgsrc,namedata}) => {
    const [follow,setFollow] = useState(false)

    const onHandle=()=>{
        follow ? setFollow(false) : setFollow(true);
        console.log(follow)
    }

    return (
        <>
        <div className="card_div">
          <ul className="nav nav-pills nav-fill m-auto d-flex">
                    <ul className="d-flex post_pro me-auto ">
                    <li className="nav-itemes_img d-flex ">
                    <img src={imgsrc} className="card-img-top" alt="post" />
                    </li>
                    <li className="nav-item d-flex">
                        <Link className="nav-link" to="#">{namedata}</Link>
                    </li>
                    </ul>
                    <ul className="linkshare d-flex"> 
                    <button className={follow ? "followBtn" : "followBtnHide"} type="button" onClick={onHandle}>{follow ? "Followed" : "Follow"}</button>
                    </ul>
            </ul>
            </div>     
        </>
    )
}

export default Card2;
