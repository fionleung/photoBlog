import React, {useState} from "react";
import ImgRows from "./ImgRows";



function Blog(props){
  //date format
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const createdate=new Date(props.date);
  const shortdate=createdate.toLocaleDateString("en-US", options);
  const [isWrap, setstyle] = useState("wrap");

  function changewrap(isWrap){
    setstyle(isWrap);
  }
  return (
    <div className={props.isEven?"blog":"blog reverseItem"} style={{"flexWrap": isWrap}}>

    <ImgRows link={props.urls} changestyle={changewrap} />

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

export default Blog;
