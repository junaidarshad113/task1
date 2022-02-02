import React from 'react';
import { useState } from 'react/cjs/react.development';

const Todos = () => {
    const {name,setname}=useState();
    
const onSubmit=(data)=>{
    console.log(data)
};
  return( 
  <form onSubmit={setname (onSubmit)}> 
      <input type="text" ref={name}/>
     <input type="text" ref={name}/> 
    <input type='Submit'  />
</form> 
  );
};
export default Todos;