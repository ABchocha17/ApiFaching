import {getposts} from "../apis/index";
import { useEffect, useState } from "react";

export default function Posts() {
    const [data,setData] = useState(null);
    useEffect(()=>{
        getposts().then(posts => setData(posts))
    },[]);
  return (
    <div>
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
  )
}
