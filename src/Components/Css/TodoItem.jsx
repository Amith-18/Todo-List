
// import './Css/TodoItem.css';
// import cross from './Components/Assets/cross.png';
// import not_tick from './Components/Assets/not_tick.png';
// import tick from './Components/Assets/tick.png';

// export const TodoItem = ({ no, display, text }) => {
//   return (
//     <div className="todo-item">
//       <div className="todo-items-container">
//         <img src={not_tick} alt="Not Completed" />
//         <img src={tick} alt="Completed" />
//         <div className="todo-items-text">{text}</div>
//       </div>
//       <img src={cross} alt="Delete" />
//     </div>
//   );
// };


import '../Css/TodoItem.css';
import cross from '../Assets/cross.png';
import not_tick from '../Assets/not_tick.png';
import tick from '../Assets/tick.png';

export const TodoItem = ({ no, display, text }) => {
  return (
    <div className="todo-item">
      <div className="todo-items-container">
        <img src={not_tick} alt="Not Completed" />
        <img src={tick} alt="Completed" />
        <div className="todo-items-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' src={cross} alt="Delete" />
    </div>
  );
};




