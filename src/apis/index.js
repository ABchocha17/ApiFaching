export const getposts = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "GET"
    })
    
    return await response.json();
}

export const user = async()=>{
    const response = await fetch("https://randomuser.me/api/",{
        method:"Get"
    });
    return await response.json();
}