import React from  'react';
import './ToDoList.css';
function ToDoList({ items }) {
    return (
      <ol className='todo-list'>
        {items.map((item, index) => (
          <li key={index} className='todo-items'>{item}</li>
        ))}
      </ol>
    );
  }
  

export default ToDoList;