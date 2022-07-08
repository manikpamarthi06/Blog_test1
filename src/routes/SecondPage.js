import React from "react";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";

function SecondPage() {
  const loc = useLocation();
  const { title, desc, imageUrl } = loc.state;

  let editBlog = () => {
    console.log("edited");
  }

  let deleteBlog = async () => {
    console.log("deleted");
    let data = await fetch("", {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
  }

  return (
    <div style={{ paddingTop: "50px", paddingLeft: "50px" }}>
      <div className="row">
        <img src={imageUrl} />
        <div
          style={{
            paddingLeft: "50px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <strong>Title :</strong> {title}
          </p>
          <p>
            <strong>Description :</strong> {desc}
          </p>
        </div>
      </div>
      <div>
        <button>
          <Link to ="/edit_blog" state={{title: title, desc: desc, imageUrl: imageUrl}}>Edit</Link>
        </button>
        <button onClick={deleteBlog}><i className="fa fa-trash"></i>delete</button>
      </div>
    </div>
  );
}

export default SecondPage;
