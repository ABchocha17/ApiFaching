import { useEffect, useState } from "react";
import {user} from "../apis/index";


export default function RendemUser() {
    const [userdata,setUserData] = useState(null);

    const chengUser =()=>{
        user().then(user => setUserData(user.results[0]))
      }

      useEffect(()=>{
        chengUser()
      },[]);    

  return (
    <div>
        <div className="user">
            {userdata && <>
            <div className="user_img">
              <img src={userdata.picture.large} alt="" />
                <h4>Name: {`${userdata.name.title} ${userdata.name.first} ${userdata.name.last}`}</h4>
                <p>Gender: {userdata.gender}</p>
            </div>
            <div className="userdata">
              <div className="userdata_top">
                <p>User Namr <span>{userdata.login.username}</span></p>
                <p>User Age <span>{userdata.dob.age}</span></p>
                <p>Mobile Number <span>{userdata.phone}</span></p>
              </div>
              <ul>
                <li>City: {userdata.location.city}</li>
                <li>state: {userdata.location.state}</li>
                <li>country: {userdata.location.country}</li>
                <li>postcode: {userdata.location.postcode}</li>
                <li>Email: {userdata.email}</li>
              </ul>
                <button onClick={chengUser}>Next User</button>
            </div>
            </>}
            {userdata && <div className="userchange">
        </div>}
      </div>
    </div>
  )
}
