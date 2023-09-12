import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosConfig/instance';
import { useParams } from 'react-router-dom';

export default function Details() {
        var {id}  = useParams()
    var [movie, setmovie] = useState({});
    useEffect(function () {
      axiosInstance
        .get(`movie/${id}`)
        .then((res) => {
          console.log(res.data);
          setmovie(res.data);
        })
        .catch((err) => {
          console.log(err);

        });
    }, []);
  
  return (
    <>
        <div className='mt-5 ' style={{color:"white", backgroundImage:`url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
        <div className='container-fluid p-5 d-flex '  style={{backgroundColor:"rgb(0,0,0,.5)"}} > 
            <img style={{height:"400px"}} src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="" />
            <div className='p-2'>
              <div className='d-flex  align-items-center '>
                <h1 >{movie?.title}</h1>
                <h5 >({movie?.release_date})</h5>
              </div>
              <h3>over view</h3>
              <p>{movie.overview}</p>
            </div>

            
        </div>
        </div>
    </>
  )
}
