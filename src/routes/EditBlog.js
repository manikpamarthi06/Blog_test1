import React from "react";
import { useLocation } from "react-router-dom";

const EditBlog = (props) => {
    let loc = useLocation();
    let { title, desc, imageUrl } = loc.state;
    console.log(loc.state);

    let save_edit = (e) => {
        e.preventDefault();
        console.log("test");
    }
    return (
        <form id = "create_form" style={{ padding: "20px 0px 0px 60px"}}>
                <label htmlFor="fname">Title:</label><br/>
                <textarea type="text" id="fname" name="fname" placeholder="Title of the Blog">{title}</textarea><br/>
                <label htmlFor="lname">Description:</label><br/>
                <textarea id="w3review" name="w3review" rows="15" cols="75" placeholder="Describe your blog" >{desc}</textarea><br/>
                <label htmlFor="img" style={{padding: "30px 0px"}}>Select image:</label>
                <input type="text" id="img" name="img" placeholder="image url goes here" />{imageUrl}<br/>
                <input type="submit" onClick ={save_edit}value="Save Blog"  style={{ backgroundColor: "deepskyblue"}}/>
         </form>
    );
}

export default EditBlog;