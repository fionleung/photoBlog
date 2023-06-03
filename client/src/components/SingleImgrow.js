import React from "react";
import ImgItem from "./ImgItem";

function SingleImgrow(props){

  return(
  <div className="pic-row" >
     {props.link.map((link,index) => <ImgItem key={index} link={link} size={props.size} />)}
  </div>
)}

export default SingleImgrow;
