import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import {Card, Container,ProgressBar, Col, Row} from 'react-bootstrap'

import './todo.scss';

const ToDo =(props)=>   {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }

  const [list, setList] = useState( [] );

   const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList( [...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let lists = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(lists);
    }

  };

  const handlerDelete  = id => {

    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
   let id = list.indexOf(item)
   console.log('ahmad')
   console.log(list,'33333')
   let myList = [...list]
   myList.splice(id, 1);
   console.log(list,"jj")
   setList(myList);
    }

 
  }

  const handleEdit = (id,value) => {
    let item = list.filter(i => i._id === id)[0] || {};
    // console.log('ahmaaaaaaaaaaaaaaa')
    // console.log(id)
    // if (item._id) {
    // let myList = [...list]
  
    if (item._id) {
      item.text = value;
      let lists = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(lists);
      }

  
  }
  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list);
  },[] );  

//   useEffect(() => {
//     console.log('Person Added');
//     if (people.length >= 1) { document.title = `Welcom, ${name}!` }
// }, [people]);

  
    return (
     
      <>
      <Container>
      <Col>
        <header>
        { console.log(list)}
          <h2>
          There are { list.filter(item => !item.complete).length } Items To Complete
          </h2>
        </header>
        </Col>
       <Card>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              handleDelete = {handlerDelete}
              handleEdit = {handleEdit}
            />
          </div>
         
        </section>
        </Card>
        </Container>
      </>
    );
  
}

export default ToDo;
