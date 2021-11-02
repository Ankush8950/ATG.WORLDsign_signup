import React,{ useState } from 'react'
import "./Create-acc.css"
import group from "../image/Group 3.png"
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import Sign from '../SignPage/Sign';
import { Link } from 'react-router-dom';


const Create = ({close}) => {
    const [sign_up, setSignUp] = useState(false);

    const [signInHide, setSignInHide] = useState(true);

    const pageRender = () => {
      setSignUp(true)
      setSignInHide(false)
    }

    return (
        <>
        <div className={signInHide ? "sign_up_show" : "sign_up_hide"}>
        <div className="close_icon">
          <AiFillCloseCircle onClick={close} />
        </div>
          <div className="create_page" >
          <div className="card">
            <div className="card-body">
            <div className="row">
            <div className="col-sm-7 col-md-6 col-lg-6">    
                <h5 className="card-title">Create-Account</h5> 
                <div className="row">
                <div className="input-group">
                <input type="text" aria-label="First name" className="form-control" placeholder="First Name"  />
                <input type="text" aria-label="Last name" className="form-control" placeholder="Last Name" />
              </div>  
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
              <button className="btn btn-primary" type="button">Create Account</button>
              <button className="btn" type="button"><BsFacebook  className="fac_icon" />  Sign up with Facebook</button>
              <button className="btn" type="button"><FcGoogle /> Sign up with Google </button>
              </div>
            </div>
            <div className="col-sm-5 col-md-6 col-lg-6">
                <div className="sign_btn">
                <h3 className="link_create">Already have an account? <Link to="Sign" onClick={pageRender}> Sign In</Link></h3>  
                </div>
            <img src={group} className="card-imges-top" alt="Header-pho" />
            <p className="font-weight-normal">By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>  
            </div>  
            </div>
            
          </div>  
          </div>
          </div>

          <div className={sign_up ? "Sign_up_shows" : "Sign_up_hides"}>
            <Sign closeb = {close} page = {() => {
              setSignUp(false)
              setSignInHide(true)
            }}
            />
          </div>
       
        </>
    )
}

export default Create;
