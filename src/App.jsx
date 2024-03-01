import { useEffect, useState } from "react";
import {getposts,user} from "./apis/index";
function App() {
  const [data,setData] = useState(null);
  const [userdata,setUserData] = useState(null);

  const chengUser =()=>{
    user().then(user => setUserData(user.results[0]))
  }

  useEffect(()=>{
    getposts().then(posts => setData(posts))
  },[]);

  useEffect(()=>{
    chengUser()
  },[]);
console.log(userdata)
  return (
    <div className="app">
      <div className="user">
        {userdata && <>
          <img src={userdata.picture.large} alt="" />
          <div className="userdata">
            <h1>Name: {`${userdata.name.title} ${userdata.name.first} ${userdata.name.last}`}</h1>
            <p>Gender: {userdata.gender}</p>
            <p>User Name: {userdata.login.username}</p>
            <p>User Adress: {userdata.location.city}, {userdata.location.country}</p>
          </div>
        </>}
        {userdata && <div className="userchange">
          <button onClick={chengUser}>Next User</button>
        </div>}
      </div>
     <div className="posts">
      {data && data.map((post)=>{
          return(
            <div className="post_card" key={post.id}>
              <div className="post_card_inr">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </div>
          )
        })}
     </div>
    </div>
  );
}

export default App;
