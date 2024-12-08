import { useState } from 'react';
import './Todo.css';
import { useEffect } from 'react';
import { useRef } from 'react';

let count = 0;
export const Todo = () => {

    const [todos,setTodos] = useState([]);
    const inputRef = useRef(null);
    const add = ()=>{
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value ="";
    }

    // useEffect(()=>{
    //     console.log(todos.text);
    // },[todos])

    useEffect(() => { 
        todos.forEach(todo => { 
            console.log(todo.text); 
        }); 
    }, [todos]);

  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef}type="text" className='todo-input' placeholder='Add Your Task'/>
            <div onClick={()=>{add()}} className="todo-add-btn">Add</div>
        </div>

        <div className="todo-list">

        </div>
    </div>
  )
}



