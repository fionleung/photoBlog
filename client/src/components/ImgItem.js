import React from "react";
import {useWindowDimensions} from "./useWindowDimensions";


function ImgItem(props){
  const { width } = useWindowDimensions();
  let size=props.size? props.size:"w".concat(width)


  return (
    <div className="gallery">
       <img src={props.link.concat(size)} alt="cat" loading="lazy"/>
    </div>
  );
}

export default ImgItem;
