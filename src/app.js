import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo1 from './components/todo/todo-connected'
import IncompleteTasks from './context/item-completed'

export default function App()  {
  
    return (
      <IncompleteTasks>
      <>
        {/* <ToDo /> */}
        <ToDo1 />
      </>
      </IncompleteTasks>
    );
  
}




