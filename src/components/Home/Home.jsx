import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changefavorite, pushfav, removfav  } from "../../movies/slice/favorite";
import { moveiAction } from "../../movies/slice/movie";
import { Context } from "../../context/context";
const Home = () => {
  let [page, setpage] = useState(1);
  let [searsh, setsearsh] = useState("");
  let {languge}=useContext(Context)

  const dipatch = useDispatch();

  var movie = useSelector((state) => { return state.movies.movies;});


  useEffect(
    function () {
      dipatch(moveiAction(page));
    },
    [page]
  );

  useEffect(function () {

  }, [searsh]);

  let navigate = useNavigate();
  function gotomoviedetails(id, e) {
    // alert(e.target)
    if (
      e.target.id == "fav" ||
      e.target.id == "favv" ||
      e.target == "[object SVGPathElement]"
    ) {
      e.target.preventDefault;
    } else {
      navigate("details/" + id);
    }
  }

  function next(q) {
    setpage(q);
  }
  function prev(q) {
    if (q > 0) {
      setpage(q);
    }
  }
  function searshfun(q) {
    console.log(searsh);
    // alert(q)
    if (q != "") {
      setsearsh(q);
    } else {
      setpage(2);
      setpage(1);
    }
  }
  // alert(favorite)
  const favorite = useSelector((state) => {
    return state.favorite.favorite;
  });
  // console.log(favorite);
  const dispatch = useDispatch();

  function favfun(mov) {
 
    dispatch(pushfav(mov));
    // console.log(movie);
   
  }
  function isfavfun(mov){

    for (const fav of favorite) {
      if (fav.id==mov.id ){return true}
      // else {return false}
    }
  }

  return (
    <>
      <div className="d-flex w-100  justify-content-evenly pt-5">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            searshfun(e.target.value);
          }}
        />
      </div>
      <div className="d-flex w-100  justify-content-evenly pt-5">
        <button
          className="btn btn-primary"
          onClick={() => {
            prev(--page);
          }}
        >
          {" "}
          {languge=="ar"?"السابق":"prev"}
        </button>
        <h2>{page}</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            next(++page);
          }}
        >
          {" "}
          {languge=="ar"?"التالى":"next"}
        </button>
      </div>

      <div class="d-flex flex-wrap p-5 ">
        {movie.map((mov) => {
          return (
            <div className="col-2 p-2  ">
              <div
                class="card"
                onClick={(e) => {
                  gotomoviedetails(mov.id, e);
                }}
              >
                <div
                  id="fav"
                  className="position-absolute "
                  onClick={(e) => {
                    favfun(mov);
                  }}
                >
                  {" "}
                 {isfavfun(mov)? <h1 id="favv">❤️</h1>:<h1 id="favv">🤍</h1>}
                </div>
                <img
                  class="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title" style={{ height: "50px" }}>
                    {mov.original_title}
                  </h5>
                  <p
                    class="card-text overflow-hidden"
                    style={{ height: "140px" }}
                  >
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
      <div className="d-flex w-100  justify-content-evenly p-5">
        <button
          className="btn btn-primary"
          onClick={() => {
            prev(--page);
          }}
        >
          {" "}
          prev
        </button>
        <h2>{page}</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            next(++page);
          }}
        >
          {" "}
          next
        </button>
      </div>
    </>
  );
};

export default Home;
