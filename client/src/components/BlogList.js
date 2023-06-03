import React, { useEffect, useState, useRef  } from 'react';
import Blog from "./Blog";
import Blogsm from "./Blogsm";
import Navi from "./Navi";
import {useWindowDimensions} from "./useWindowDimensions";

// SERVICES
import {getPosts} from '../services/postService';

export default function BlogList(){
  const [page, setPage] = useState(-1);
  const [posts, setposts] = useState([]);
 const { width } = useWindowDimensions();
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
    const updatePosts = async page => {
      try{
        let res = await getPosts(page);
         setposts((posts) =>[...posts,...res]);
      }catch(e){}
    }
     updatePosts(page);
   }, [page])



  return (
    <div>
    <Navi />
    <div className="content-container">
    {(posts && posts.length > 0) ? (posts.map((blog,index)  =>(
      width<576?
      (<Blogsm key={index} title={blog.title} content={blog.content} date={blog.createDate} urls={blog.urls} isEven={index%2===0}/>):
      (<Blog key={index} title={blog.title} content={blog.content} date={blog.createDate} urls={blog.urls} isEven={index%2===0}/>)))
    )

      :(<p>No products found</p>)}
  </div>
  <footer ref={loader}>
    <span>©2021 by Money is a Cat. All image rights are my own and cannot be used without consent. </span>
  </footer>
  </div>
  );
}
