import React from "react";
import ImgItem from "./ImgItem";


function Blogsm(props){
  const imglinks=props.urls;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const createdate=new Date(props.date);
  const shortdate=createdate.toLocaleDateString("en-US", options);

  return (
    <div className="blog" style={{"flexWrap": "wrap"}}>
      <div>
         {imglinks.map((link,index) => <ImgItem key={index} link={link.url}/>)}
     </div>
    <div className="content-row">
    <div className="content-text">
    <h3>{props.title}</h3>
    <p className="date">{shortdate}</p>
    <p>{props.content}</p>
    </div>
    </div>
    </div>
  );
}

export default Blogsm;
