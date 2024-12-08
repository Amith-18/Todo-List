import './Todo.css';


export const Todo = () => {
  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input type="text" className='todo-input' placeholder='Add Your Task'/>
            <div className="todo-add-btn">Add</div>
        </div>

        <div className="todo-list">
            
        </div>
    </div>
  )
}
