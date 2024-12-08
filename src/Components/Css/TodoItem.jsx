import './Css/TodoItem.css';
import cross from "./Components/Assets/cross.png"
import not_tick from "./Components/Assets/not_tick.png"
import tick from "./Components/Assets/tick.png"


export const TodoItem = () => {
  return (
      <div className="todo-item">
        <div className="todo-items-container">
          <img src={not_tick} alt="" />
          <img src={tick} alt="" />
          <div className="todo-items-text"></div>
        </div>
        <img src={cross} alt="" />
      </div>
  )
}

