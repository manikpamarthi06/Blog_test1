// import {Link} from "react-router-dom";
import React from "react";
function CreateBlog (){ 
    let createPost = (e) =>{
        e.preventDefault();
        let form = new FormData(document.getElementById("create_form"));
        let title = form.get("fname");
        let description = form.get("w3review");
        let image_url = form.get("img");
        console.log("test");
        console.log(title, description, image_url);
        let data = fetch("googleapis", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                image_url : image_url
            })
        })
    }

    return (
           <form id = "create_form" style={{ padding: "20px 0px 0px 60px"}}>
                <label htmlFor="fname">Title:</label><br/>
                <input type="text" id="fname" name="fname" placeholder="Title of the Blog"/><br/>
                <label htmlFor="lname">Description:</label><br/>
                <textarea id="w3review" name="w3review" rows="15" cols="75" placeholder="Describe your blog"></textarea><br/>
                <label htmlFor="img" style={{padding: "30px 0px"}}>Select image:</label>
                <input type="text" id="img" name="img" placeholder="image url goes here"/><br/>
                <input type="submit" onClick ={createPost} value="Add Blog"  style={{ backgroundColor: "deepskyblue"}}/>
            </form>
    );
}

export default CreateBlog;