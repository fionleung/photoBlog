import axios from 'axios';


  export async function getPosts(page){
    let res=[];
    if (page>=0)
    res = await axios.get('api/post/'+page);
    return res.data || [];
  }

export async function postOne(req,res){
  await axios.post('/api/post',req);
   return res;
}


export async function postMsg(req){
  let res= await axios.post('/api/contact',req);
   return res.data.statue;
}

export async function getPicUrl(page){
  let res=[];
  if (page>=0)
  res = await axios.get('/api/pics/'+page);
  return res.data || [];
}

export async function verify(req){

  let res = await axios.post('/api/login',req);
   return res.data.ok;
}
