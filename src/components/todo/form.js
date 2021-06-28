
import React, { useState, useEffect } from 'react';
import {Card, Container,ProgressBar, Col, Row ,Button} from 'react-bootstrap'
import useForm from '../../hooks/useform';

const TodoForm =(props)=> {

  
 const [ handleInputChange, handleSubmit, item] =  useForm(props)


  // const [formData, setFormData] = useState({});
 
//   const [item, setItem] = useState( {} );
  
//  const  handleInputChange = e => {
//    console.log(e.target.value,'99999999999')
//     setItem({...item, [e.target.name]: e.target.value } );
  
//   };

//  const handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     props.handleSubmit(item);
//     const items = {};
//     setItem({items});
//   };




 
    return (
      <>
        <h3>Add Item</h3>
        {/* <Card> */}

        
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <button >Add Item</button>
        </form>
        {/* </Card> */}
      </>
    );
  
}

export default TodoForm;
