
import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddToDo = ()=>{

    const text = inputRef.current.value;
    const newItem = {completed: false, text};
    setTodos([...todos, newItem]);
    inputRef.current.value = "";

  }

   const handleItemDone = (index) =>{
    
   const newToDos = [...todos];
    newToDos[index].completed = !newToDos[index].completed;
    setTodos(newToDos);

  }

   const handleDeleteItem = (index)=>{
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="item-container">
        
        <ul>
        {todos.map(({text, completed}, index)=> {
          return (

          <div key={index}  className='list'> 
            <li className={completed?"done": ""} onClick={()=>handleItemDone(index)}>{text}</li>
            <span onClick={()=>handleDeleteItem(index)}>❌</span>

           </div> 
          )
           })}

      </ul>

      <input ref={inputRef} placeholder='Enter task here...' type="text"/>
      <button id='btn' onClick={handleAddToDo}>Add</button>

      </div>
      
    </div>
  );
}

export default App;
