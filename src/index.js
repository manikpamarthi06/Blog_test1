import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstPage, SecondPage, CreateBlog, EditBlog } from "./routes";
import { blog_data } from "./data";

import "./App.css";
// import {CreateBlog} from "./routes/CreateBlog";

function App() {
  let [movies, setMovies] = useState(blog_data);
  let [searchMovie, setSearchMovie] = useState("");

  console.log(movies);
  let getMoviesList = async (movieText) => {
    try {
      console.log("search Movie : ", movieText);
      let data = await fetch(
        `https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553?key=AIzaSyBe7GPZrmY2uBR1JW7-LNO70RgiiB45I_k`
      );
      let data_json = await data.json();
      // console.log(data_json);
      setMovies(data_json.Search);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="second_page" element={<SecondPage />} />
        <Route
          path="/"
          element={
            <FirstPage
              getMoviesList={getMoviesList}
              searchMovie={searchMovie}
              setSearchMovie={setSearchMovie}
              movies={movies}
            />
          }
        ></Route>
        <Route path="create_blog" element={<CreateBlog />} />
        <Route path="edit_blog" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
