const mongoose = require('mongoose');

const Post = require("../models/Post");
const User = require("../models/User");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID,process.env.CLIENT_SECREET)
const nodemailer = require("nodemailer");

module.exports = (app) => {
  app.post("/api/login", async (req, res) => {

     const token  = req.body.token;
     const ticket = await client.verifyIdToken({
         idToken: token,
         audience: process.env.CLIENT_ID
     });

     const { email} = ticket.getPayload();
     User.findOne({email: email}, function(err,obj) {
       if (obj){
         return res.json({
           ok:true
           });
       } else{
         return res.status(500).json({
           ok:false
               })
       }});

 })

  app.get(`/api/post/:page`, async (req, res) => {
    let page=req.params.page;
    let posts = await Post.find().sort({"createDate":-1}).skip(page*5).limit(5);
    return res.status(200).send(posts);
  });

  app.get(`/api/pics/:page`, async (req, res) => {
    let page=req.params.page;
    let urls = await Post.aggregate().sort({"createDate":-1}).unwind("urls").project({url:"$urls.url",ratio:"$urls.ratio",_id:0}).skip(page*40).limit(40);
    return res.status(200).send(urls);
  });

  app.post(`/api/post`, async (req, res) => {
    let post = await Post.create(req.body);
    return res.status(201).send({
      error: false,
      post
    })
  })


  app.post('/api/contact',async(req,res) =>{
    client.setCredentials({
     refresh_token: process.env.REFRESH_TOKEN
});

const accessToken = new Promise((resolve, reject) => {
      client.getAccessToken((err, token) => {
      if (err) console.log(err); // Handling the errors
      else resolve(token);
    });
  });


    const contactEmail = nodemailer.createTransport({
      service: "gmail",
       auth: {
            type: "OAuth2",
            user: "fionloves1024@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECREET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
       }
});

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "fionloves1024@gmail.com",
    subject: "Message for MoneyWebsite",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      return res.json({ status:false});
    } else {
      return res.json({status:true});
    }
  });
});

  app.put(`/api/post/:id`, async (req, res) => {
    let post = await Post.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
      error: false,
      post
    })

  });

  app.delete(`/api/post/:id`, async (req, res) => {
    const {id} = req.params;

    let post = await Post.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      post
    })

  })

}
