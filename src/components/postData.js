import React, { useState } from 'react'
const PostData = () => {
    const datapost= useState({
        name:'junaid',
        email:'junaidarshad@gmail.com',
        designation:'Developer',
        pin:'456789'
      })
        fetch('https://jsonplaceholder.typicode.com/users',{
          method:'POST',
          headers:{'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':' *'
        },
        body:JSON.stringify(datapost)
      })
      .then(response=>{
        console.log('response',response)
        if(response.status==2){
            alert("success")
        }
      }) 
  return (
    <div>
    
      </div>
  )
}

export default PostData