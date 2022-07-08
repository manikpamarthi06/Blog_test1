
import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <Link to="/create_blog" >
      <button style={{  marginLeft:"1200px"  ,backgroundColor: "#5ee5f0",
    height: "39px",
    width: "175px"}}><i className="fa fa-edit"></i>Create A Blog</button>
    </Link>
  );
};

export default BlogList;