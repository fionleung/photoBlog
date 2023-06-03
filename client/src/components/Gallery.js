import React, { useEffect, useState, useRef  } from 'react';
import GalleryRows from "./GalleryRows";
import Navi from "./Navi";
// SERVICES
import {getPicUrl} from '../services/postService';

function Gallery(){
  const [page, setPage] = useState(-1);
  const [pics, setpics] = useState([]);
  const loader = useRef(null);

  useEffect(() => {
          var options = {
             root: null,
             rootMargin: "20px",
             threshold: 1.0
          };
         // initialize IntersectionObserver
         // and attaching to Load More div
          const observer = new IntersectionObserver(handleObserver, options);
          if (loader.current) {
             observer.observe(loader.current)
          }
     }, []);

     const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
           setPage((page) => page + 1);
        }
    }

    useEffect(() => {
      const getPics = async page => {
        try{
          let res = await getPicUrl(page);
           setpics((pics) =>[...pics,...res]);
        }catch(e){}
      }
       getPics(page);
     }, [page])



  return (
    <div>
    <Navi />
    <div className="content-container">

    <GalleryRows link={pics} />
    </div>
    <footer ref={loader}>
      <span>©2021 by Money is a Cat. All image rights are my own and cannot be used without consent. </span>
    </footer>
    </div>
  );
}

export default Gallery;
