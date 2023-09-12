
import { useState } from "react";
import { FaEyeSlash ,FaEye } from "react-icons/fa6";
export default function Signup() {

    
    let [user ,setuser]=useState({
        name:'',
        email:'',
        username:'',
        pass:'',
        repass:''
    })
    function change(e){
        setuser({...user,[e.target.name]:e.target.value})
    }

    let [show ,setshow]=useState(true)
    function togilpass(){
        setshow(show=!show)
    }

    let [error ,seterror]=useState({
        name:'',
        email:'',
        username:'',
        pass:'',
        repass:''

    })
    function chickerr(e){
        if (e.target.name=='name'){
            if(e.target.value.length==0){
                seterror({...error,name:"name require"})
                // alert(error.email)
            }
            else{
                seterror({...error,name:"ok"})

            }
        }
        if (e.target.name=='email'){
            const Regex = /^[a-zA-Z]+@[a-zA-Z]+\.com/;

            if(!Regex.test(e.target.value)){
                seterror({...error,email:"Email must includes @"})
                // alert(error.email)
            }
            else{
                seterror({...error,email:"ok"})

            }
        }
        if (e.target.name=='username'){
            const Regex = /^[^\s]+$/;

            if(!Regex.test(e.target.value)){
                seterror({...error,username:"no space"})
            }
            else{
                seterror({...error,username:"ok"})
                // alert(user.username)

            }
        }
        if (e.target.name=='pass'){
            const Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

            if(!Regex.test(e.target.value)){
                seterror({...error,pass:"Invalid password"})
            }
            else{
                seterror({...error,pass:"ok"})
                // alert(user.username)

            }
        }
        if (e.target.name=='repass'){

            if(e.target.value!=user.pass){
                seterror({...error,repass:"Invalid password"})
            }
            else{
                seterror({...error,repass:"ok"})
                // alert(user.username)

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
                <h2 className="p-3">Sign up</h2>
              </div>
              <div className="card-body">
                <form>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={(e)=>{change(e) ;chickerr(e)} }/>
                    <p style={{color:`${error.name=="ok"?"green":"red"}`}}>{error.name}</p>

                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="text" className="form-control" id="email" name="email" value={user.email} onChange={(e)=>{change(e) ;chickerr(e)} }/>
                    <p style={{color:`${error.email=="ok"?"green":"red"}`}}>{error.email}</p>

                  </div>

                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input type="text" className="form-control" id="username" name="username" value={user.username} onChange={(e)=>{change(e) ; chickerr(e);} }/>
                    <p style={{color:`${error.username=="ok"?"green":"red"}`}}>{error.username}</p>

                  </div>
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
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="d-flex align-items-center">
                         <input type={show?"password":"text"} className="form-control" id="repass" name="repass" value={user.repass} onChange={(e)=>{change(e) ;chickerr(e)}}/>
                        <div onClick={togilpass}>
                           {show?<FaEyeSlash  className="p-2" style={{fontSize:"40px"}}/>:<FaEye  className="p-2" style={{fontSize:"40px"}}/>} 

                        </div>
                    
                    </div>
                    <p style={{color:`${error.repass=="ok"?"green":"red"}`}}>{error.repass}</p>

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
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
