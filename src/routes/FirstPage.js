import React from "react";
import { BlogList, MovieCard } from "../components";
import {CreateBlog} from "./CreateBlog"

function FirstPage(props) {
  const { searchMovie, getMoviesList, setSearchMovie } = props;
  console.log(props.movies)
  let movies_div = props.movies?.map((movie, index) => {
    console.log(movie);
    return (
      <MovieCard
        title={movie.title}
        desc={movie.description}
        imageUrl={movie.Poster}
        key={`movie-${index}`}
        author={movie.authorName}
      />
    );
  });
  return (
    <>
    <div style ={{diplay: "flex", backgroundColor:"aliceblue"}}>
      <h1 style={{marginLeft:"50px", marginTop: "30px"}}>Search A Blog</h1>
      <span style={{marginLeft: "1200px", marginTop: "20px"}}><button>Sign In</button></span>
      <span style={{marginLeft: "50px", marginTop: "20px"}}><button>Sign Up</button></span>
    </div>
      <input 
        id="movieName"
        type="text"
        value={searchMovie}
        placeholder="Type to search......"
        onChange={(e) => setSearchMovie(e.target.value)}
        style={{    marginLeft: "40px",
          backgroundColor: "aliceblue", height: "50px", width:"250px"}}
      />
      <button onClick={() => getMoviesList(searchMovie)} style ={{backgroundColor:"wheat", marginLeft:"10px", height:"30px"}}>Search</button>

      <BlogList />
      <div className="movies_list">
        <div className="wrapper">
          <div className="card-deck">{movies_div}</div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
