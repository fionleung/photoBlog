import React , { useState } from "react";
import Navi from "./Navi";
import { Redirect } from "react-router-dom";
import {postMsg} from '../services/postService';


function Contact(props) {
  const [redirect,setRedirect]=useState(false);
  const [errorMessage,setError]=useState([]);
const [msg, setMsg] = useState({
  name: "",
  email: "",
  message:""
});


function handleChange(event) {
  const { name, value } = event.target;
  setMsg(prevMsg => {
    return {
      ...prevMsg,
      [name]: value
    };
  });
}


function submitMsg(event) {
  event.preventDefault();
  setError([]);
  if(validateForm()){
    const res=postMsg(msg);
    if(res) setRedirect(true);

  }
};

const validateForm = () => {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var res=true;
  if(msg.name.length<1) {
    setError((err)=>(err===null?['please enter your name']:[...err,<br/>,'please enter your name']));
    res=false;}
  if(msg.email.length<1) {
    setError((err)=>(err===null?["please enter your email"]:[...err ,<br/>,'please enter your email']));
    res=false;}
  else if (!msg.email.match(mailformat)) {
    setError((err)=>(err===null?["please enter a valid email"]:[...err,<br/>,'please enter a valid email']));
    res=false;}
  if(msg.message.length<1) {
    setError((err)=>(err===null?["please leave us a message"]:[...err,<br/>,"please leave us a message"]));
    res=false;}
    return res;
}


return (redirect?
  <Redirect to='/msgsent' />:
  <div>
    <Navi />

    <form>
    <h4>Money is waiting for you message.</h4>
     <span className="error">{errorMessage}</span>
    <div>
    <label htmlFor="name">Name:</label>
      <input
        name="name"
        onChange={handleChange}
        value={msg.name}
      />
      </div>
      <div>
      <label htmlFor="email">Email:</label>
        <input
          name="email"
          onChange={handleChange}
          value={msg.email}

        />
        </div>
        <div>
        <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        onChange={handleChange}
        value={msg.message}
        placeholder="whatever you want to let Money know. meow~"
        rows="3"

      />
    </div>
      <div className="buttonRow">
      <button type="submit" onClick={submitMsg}>SUBMIT</button>
      </div>
    </form>
  </div>
);
}

export default Contact;
