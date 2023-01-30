
import useList from './custom-hooks/uselist';
import './App.css';
import { useState } from 'react';

function App() {

  const{list,push,pull}=useList()
  const[todo,setTodo]=useState("")
  const onsubmithandler=(event)=>
  {
    event.preventDefault()
    push(todo)
    setTodo("")
  }
  
  return (
    <>

   <div>
    <div className="container">
    <header>
        <form onSubmit={(event)=>{onsubmithandler(event)}}>
          <h1 id="main">TO DO LIST</h1>
          <input  placeholder='Enter your task ✏️' type="text" className='inputText' onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
          <button  type="submit"  className="btn btn-success">Add Task</button>
          </form>
          <h5>{list.map((listItem,listIndex)=>{
            return (
              <div className='list-items'>
                 {/* <button type="button" class="btn btn-success">✓</button> */}
                 <div classNamw="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate" >
  </label>
</div>
  
                <li key={listIndex}>{listItem}</li>
                 {/* <div onClick={()=>{pull(listIndex)}} className="btn1">delete</div> */}
                
                 <button onClick={()=>{pull(listIndex)}} className="btn btn-danger">Delete</button>
                
              </div>
            )
          })}
          </h5>
        </header>
   
    </div>
    </div>
    </>
  );
}

export default App;
