import React, { useState } from "react";
const Todos = () => {
  

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status,setSelectStatus]=useState('');
  const [todos, setTodos]=useState([]);


  const formSubmission = (e) => {
    e.preventDefault();
    let todo = {
      title:title,
      description:description,
      status:status
    }
    setTodos([...todos, todo])
  };
 
  return (
    <div className="App">
      <h1>Todos Form </h1>
      <form onSubmit={formSubmission}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e)=>setTitle(e.target.value)}
          
        
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter description"
         onChange={(e)=>setDescription(e.target.value)}
        
              
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br/>
        <br/>
        
        <input class="form-check-input" type="radio" name="low" id="flexRadioDefault1" onChange={(e)=>setSelectStatus(e.target.value)}/>
        <label>on</label>
        
        {
          todos.map(todo=>{
            return (
              <>
                <h5>{todo.title}</h5>
                <p>{todo.description}</p>
                <p>{todo.status}</p>
              </>
            )
          })
        }
      </form>
    </div>
  );
};
export default Todos;
