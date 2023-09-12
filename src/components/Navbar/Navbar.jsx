import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../context/context';
import "./style.css"
// import './Navbar.css'
export default function Header(){

  // var [ctx,setctx] = useContext(Context)

  const {languge,setlanguge} =useContext(Context)


  function change(){
    var lan =document.getElementById("lan").value;
    setlanguge(lan)
    console.log(languge);
  }
  

    return <>
     <Navbar style={{direction:`${languge=="ar"?"rtl":"ltr"}`}} bg="dark" data-bs-theme="dark" 
    //  className={languge=="ar"?"blue":"red"}
     >
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto w-100 d-flex "   >

            <NavLink className={"p-2"} to="/">          {languge=="ar"?"الرئيسيه":"home"}</NavLink>
            <NavLink className={"p-2"} to="/login">          {languge=="ar"?"تسجيل الدخول":"log in"}</NavLink>
            <NavLink className={"p-2"} to="/signup">          {languge=="ar"?"تسجيل":"sign up"}</NavLink>
            <NavLink className={"p-2"} to="/todo">          {languge=="ar"?"مهام يوميه":"todo"}</NavLink> 
            <NavLink className={"p-2"} to="/favorite">          {languge=="ar"?"المفضله":"favorite"} </NavLink> 
            <NavLink className={"p-2"} to="/counter">          {languge=="ar"?"العداد":"counter"}</NavLink> 
            
          </Nav>
          <div>
          <select onChange={change} name="languge" value={languge}  id="lan">
              <option value="en">en</option>
              <option value="ar">ar</option>
            </select>
            {/* <h1 style={{color:"white"}}>{languge}</h1> */}
          </div>
        </Container>
      </Navbar>
    </>
}


