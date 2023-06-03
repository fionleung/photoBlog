import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import Header from "./Header";
import BlogList from "./BlogList";
import Addpost from "./Addpost";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Product from "./Product";
import Login from "./Login";
import MsgSent from "./MsgSent";
import ProtectedRoute from "./ProtectedRoute";
import {verify} from '../services/postService';


function App() {
  const [user, setUser] = useState(false);
  const handleLogin = async googleData => {
      const res = await verify({token: googleData.tokenId});
       if(res) setUser(true);
       return res;
   }


  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/login' handleLogin={handleLogin} render={props => <Login handleLogin={handleLogin} />} />
        <ProtectedRoute exact path='/compose' user={user} component={Addpost} />
        <Route exact path="/">
         <BlogList />
         </Route>
        <Route exact path="/gallery">
         <Gallery />
        </Route>
        <Route path="/contact">
         <Contact />
        </Route>
        <Route path="/products" >
         <Product />
        </Route>
        <Route path="/msgsent" >
         <MsgSent />
        </Route>


      </Switch>


    </Router>
    </div>
  );
}


export default App;
