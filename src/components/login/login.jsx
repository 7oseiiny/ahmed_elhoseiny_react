// import React from 'react'

import { useState } from "react";
import { FaEyeSlash ,FaEye } from "react-icons/fa6";
export default function Login() {

    let [user ,setuser]=useState({
        email:'',
        pass:''
    })
    function change(e){
        setuser({...user,[e.target.name]:e.target.value})
    }

    let [show ,setshow]=useState(true)
    function togilpass(){
        setshow(show=!show)
    }

    let [error ,seterror]=useState({
        email:'',
        pass:''
    })
    function chickerr(e){
        if (e.target.name=='email'){
            if(!e.target.value.includes("@")||!e.target.value.includes(".com")){
                seterror({...error,email:"Email must includes @"})
                // alert(error.email)
            }
            else{
                seterror({...error,email:"ok"})

            }
        }
        if (e.target.name=='pass'){
            if(e.target.value.length<8){
                seterror({...error,pass:"pass should bigger than 8"})
                // alert(error.pass)
            }
            else{
                seterror({...error,pass:"ok"})

            }
        }
    }
    
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Login</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="text" className="form-control" id="email" name="email" value={user.email} onChange={(e)=>{change(e) ;chickerr(e)} }/>
                  </div>
                  <p style={{color:`${error.email=="ok"?"green":"red"}`}}>{error.email}</p>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="d-flex align-items-center">
                         <input type={show?"password":"text"} className="form-control" id="pass" name="pass" value={user.pass} onChange={(e)=>{change(e) ;chickerr(e)}}/>
                        <div onClick={togilpass}>
                           {show?<FaEyeSlash  className="p-2" style={{fontSize:"40px"}}/>:<FaEye  className="p-2" style={{fontSize:"40px"}}/>} 

                        </div>
                    </div>
                    <p style={{color:`${error.pass=="ok"?"green":"red"}`}}>{error.pass}</p>

                  </div>
                  <div className="mb-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label htmlFor="remember" className="form-label">
                      Remember Me
                    </label>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary text-light main-bg">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
