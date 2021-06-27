import { co } from 'co';
// import React from 'react';
import {Card, Container,ProgressBar, Col, Row ,Button} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import If from './if';

function TodoList(props)   {

  const [flag, setFlag] = useState(false)

  function handlerSubmit(e, id) {
    e.preventDefault()
   let value = document.getElementById(id).value;
   props.handleEdit(id,value)
   setFlag(!flag)
  }  


  
    return (
      <ul>
        <Card>
        {props.list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text} 
            </span>
            {/* <button onClick={() => props.handleEdit(item._id)}> edit </button> */}
           <Button onClick={() => props.handleDelete(item._id)}> X </Button>


           <form onSubmit={(e)=>handlerSubmit(e,item._id)}>
            <Button type='button' onClick={() => setFlag(!flag)}>edit</Button>
          
            <If condition={flag}>
            <Button type='submit' >new edit</Button>
            <input id={item._id}></input>
            {/* <textarea id={item._id} required></textarea> */}
            </If>
            </form>

 
             
            
          </li>
          
        ))}
         </Card>
      </ul>
     
    );
  
}

export default TodoList;
