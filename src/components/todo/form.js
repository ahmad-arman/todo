
import React, { useState, useEffect } from 'react';

const TodoForm =(props)=> {

  // constructor(props) {
  //   super(props);
  //   this.state = { item: {} };
  // }
  const [people, setPeople] = useState( {} );
 const  handleInputChange = e => {
   console.log(e.target.value,'99999999999')
    setPeople({...people, [e.target.name]: e.target.value } );
  
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // this.props.handleSubmit(this.state.item);
    const item = {};
    setPeople({item});
  };

 
    return (
      <>
        <h3>Add Item</h3>
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
          <button>Add Item</button>
        </form>
      </>
    );
  
}

export default TodoForm;
