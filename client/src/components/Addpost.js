import React, { useState } from "react";
import {postOne} from '../services/postService';
import { FaMinusCircle } from 'react-icons/fa';

function Addpost(props) {

  const [post, setPost] = useState({
    title: "",
    content: "",
    createDate:"",
    urls:[{
      url:"",
      height:0,
      width:0,
      ratio:0
    }]
  });


  function handleChange(event) {
    const { name, value } = event.target;
    setPost(prevPost => {
      return {
        ...prevPost,
        [name]: value
      };
    });
  }


  function submitPost(event) {
    post.createDate = Date.now();
    post.urls.forEach((url)=>{
     const str=url.url;
      const idx1=str.indexOf('=w');
      const idx2=str.indexOf('-h');
      const idx3=str.indexOf('-',idx2+2);

      url.width=str.substring(idx1+2,idx2);
      url.height=str.substring(idx2+2,idx3);
      url.url=str.substring(0,idx1+1);
      url.ratio=url.width/url.height;

    });


    postOne(post);
    event.preventDefault();
    setPost({
      title: "",
      content: "",
      createDate:"",
      urls:[{
        url:"",
        height:0,
        width:0,
        ratio:0
      }]
    })

};

  function addURL(i,event){
    const { name, value } = event.target;
    const newArray = [...post.urls];
    newArray[i] = {...newArray[i],[name]:value};
    setPost(prevPost => {
      return {
        ...prevPost,
        urls: newArray
      };
    });
     event.preventDefault();
  };

 function removeURL(i,event){
  const newArray = [...post.urls];
  newArray.splice(i,1);

  setPost(prevPost => {
    return {
      ...prevPost,
      urls: newArray
    };
  });
   event.preventDefault();
};

function addURLrow(event){
  const newArray = [...post.urls,""];
  setPost(prevPost => {
    return {
      ...prevPost,
      urls: newArray
    };
  });
   event.preventDefault();
};


  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={post.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          placeholder="Add detail"
          rows="3"
        />
        {post.urls.map((photo, i) => (
          <div className="imageRow" key={i}>
             <textarea  className="urltext" placeholder="Add a url" name="url" value={photo.url || ""} onChange={addURL.bind(this,i)}/>
             <button type='button' className="removeButton" onClick={removeURL.bind(this,i)}><FaMinusCircle /></button>
          </div>
        ))}
        <div className="buttonRow">
         <button className="addButton" onClick={addURLrow}>Add Image</button>

        <button onClick={submitPost}>Publish</button>
        </div>
      </form>
    </div>
  );
}

export default Addpost;
