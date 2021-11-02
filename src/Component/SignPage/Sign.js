import React,{ useState } from 'react'
import "./Sign.css"
import group from "../image/Group 3.png"
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";
import Recommended from '../Recommended_Grup/Recommended';

const Sign = ({page,closeb}) => {
  const [showRemm,setShowRemm] =useState(false);

  const [signPage, setSignPage] = useState(true)

  const pageHandle =() =>{
    setShowRemm(true);
    setSignPage(false);
  }

    return (
        <>
        <div className={signPage ? "Sign_up_showeses" : "Sign_up_hideses" }>
        <div className="close_icon">
          <AiFillCloseCircle onClick={closeb}/>
        </div>
         <div className="sign_up">
          <div className="create_page">
          <div className="card">
            <div className="card-body">
            <div className="row">
            <div className="col-sm-7 col-md-6 col-lg-6">    
                <h5 className="card-title">Sign In</h5> 
                <div className="row">
                <div className="form-floating mb-0">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              </div>
              <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" type="button"  onClick={pageHandle}>Sign In</button>
              <button className="btn" type="button"><BsFacebook  className="fac_icon" />  Sign up with Facebook</button>
              <button className="btn" type="button"><FcGoogle /> Sign up with Google </button>
              <button className="btns" type="button">Forget Password?</button>
              </div>
            </div>
            <div className="col-sm-5 col-md-6 col-lg-6">
                <div className="sign_btn">
                <h3 className="link_create">Don’t have an account yet?  <Link to="Create" onClick={page}> Create new For free! </Link></h3>  
                </div>
            <img src={group} className="card-imges-top" alt="Header-pho" />   
            </div>  
            </div>
            </div>
          </div>  
          </div>
          </div>
        </div>

          <div className={showRemm ? "signup_page_show" : "Sign_up_hideses"}>
              <Recommended pagees={()=> {
                setShowRemm(true);
                setSignPage(true);
              }} />
            </div>
         
        </>
    )
}

export default Sign;
