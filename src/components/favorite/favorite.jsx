import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { FaRegStar } from "react-icons/fa6";
import { BsFillBasket3Fill } from "react-icons/bs";
import { changefavorite,pushfav,removfav } from "../../movies/slice/favorite";


export default function favorite() {
    const favorite=useSelector((state)=>{return state.favorite.favorite })
    function gotomoviedetails(id, e){
        // alert(e.target)
        if (e.target.id=='fav'||e.target.id=='favv'||e.target=='[object SVGPathElement]') {
          e.target.preventDefault
        }
        else{
        navigate('details/'+id)
      } }
      const dipatch=useDispatch()
      function favfun(id){
        dipatch(removfav(id))
      }
    
  return (
    <div class="d-flex flex-wrap p-5 ">
        {favorite.map((mov) => {
          return (
            <div className="col-2 p-2  "  >
                <div class="card" onClick={(e)=>{gotomoviedetails(mov.id ,e)}}>
                <div id="fav" className="position-absolute " onClick={(e)=>{favfun(mov.id)}}>  <BsFillBasket3Fill id="favv"   style={{color:"red", fontSize:"50px"}}/></div>
              <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title" style={{height:"50px"}}>{mov.original_title}</h5>
                <p class="card-text overflow-hidden" style={{height:"140px"}}>
                 {mov.overview}
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            </div>
          );
        })}
      </div>
  )
}
