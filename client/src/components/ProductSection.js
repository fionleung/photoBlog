import React from "react";
import {useWindowDimensions} from "./useWindowDimensions";


export default function ProductSection(props){
  const { width,height } = useWindowDimensions();
  let size= width>=768?"h".concat(Math.floor(height*0.7)).toString():"w".concat(Math.floor(width*0.6)).toString();



  return (
    <div className="section" style={{backgroundImage: `url(${props.bg})`,backgroundPosition: '70% 35%',backgroungSize: 'cover'}}>
    <div className="row" >
    <div className={width>=768?"col-md-8":"col-sm-12"}>
       <img  src={props.imgurl.concat(size)} alt="product"/>
    </div>
    <div className={width>=768?"col-md-4":"col-sm-12"}>
        <h3 style={{color:props.ftcolor}}>{props.content}</h3>
    </div>
      </div>
    </div>
  );
}
