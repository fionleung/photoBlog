import React, { useState, useEffect } from "react";
import SingleImgrow from "./SingleImgrow";
import {useWindowDimensions} from "./useWindowDimensions";


function ImgRows(props){
  const imglinks=props.link;
  const [rows, setrows] = useState([]);
  const [sum, setSum] = useState(3.1);
  //set pic based on width
  const width = useWindowDimensions().width;
  const style=props.changestyle;



  //divide row
  useEffect(() => {
    if(width>=992)
      setSum(6.1);
    else if(width>=768) setSum(4.6);
  },[width]);

  useEffect(() => {
     setrows(chunk(imglinks,sum));
  },[imglinks,sum]);

  useEffect(() => {
      if(rows.length>0  && rows[rows.length-1].r/sum<0.7) style("nowrap");
      else style("wrap");
  },[rows,sum,style]);




  const chunk = (arr, sum) => {
  return arr.reduce((chunks, el, i) => {
    if (chunks[chunks.length - 1].r+el.ratio>sum) {
      chunks=[...chunks,{urls:[el.url],r:el.ratio}]
    } else {
      chunks[chunks.length - 1].urls.push(el.url);
      chunks[chunks.length - 1].r+=el.ratio;
    }
    return chunks
  }, [{urls:[],r:0}])
}

const getSize = (r) =>{
  let size= Math.round(width/sum/0.7);
  if(width<992) size= Math.round(width/r);
  return "h".concat(size);
}

  return(
    <div>
       {rows.map((row,index) => <SingleImgrow key={index} link={row.urls} size={getSize(row.r)}/>)}
   </div>
  )

}

export default ImgRows;
