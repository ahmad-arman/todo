import React, { useEffect, useState, useContext} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
// import axios from 'axios'; 

import useAjax from '../../hooks/useAjax';

import  {CompletedItem}  from '../../context/item-completed';
import CompletedSettings from './complete'

import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';



const ToDo1 = () => {

  const context = useContext(CompletedItem)

  // const [list, _addItem,_toggleComplete,_getTodoItems,deleteItem,editItem] = useAjax(todoAPI)
  let [apiHandler] = useAjax();
  const [list, setList] = useState([]);
  
  const  _addItem =  async (item) => {
    item.due = new Date();
    // fetch(todoAPI, {
    //   method: 'post',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(item)
    // })
    //   .then(response => response.json())
    //   .then(savedItem => {
    //     setList([...list, savedItem])
    //   })
    // axios({
    //   method: 'post',
    //   url: todoAPI,
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json' },
    //   data: JSON.stringify(item),
    // })

    try {
      let savedItem = await apiHandler(todoAPI, "post", item);
      setList([...list, savedItem.data]);
    } catch (error) {
      console.error(error.message);
    }
    // .then(savedItem => {
    //   setList([...list, savedItem.data])
    // })
    //   .catch(console.error);
  };

  const _toggleComplete =async (id) => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      // fetch(url, {
      //   method: 'put',
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(item)
      // })
      //   .then(response => response.json())
      //   .then(savedItem => {
      //     setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
      //   })
      // axios({
      //   method: 'put',
      //   url: url,
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      //   data: JSON.stringify(item),
      // })
      // .then(response => response.json())
        // .then(savedItem => {
        //   setList(list.map(listItem => listItem._id === item._id ? savedItem.data: listItem));
        // })
        // .catch(console.error);
        try {
          let savedItem = await apiHandler(url, "put", item);
          setList(
            list.map((listItem) =>
              listItem._id === item._id ? savedItem.data : listItem
            )
          );
        } catch (error) {
          console.error(error.message);
        }
    }
  };



  const _getTodoItems = () => {
    // fetch(todoAPI, {
    //   method: 'get',
    //   mode: 'cors',
    // })
    // axios({
    //   method: 'get',
    //   url: todoAPI,
    //   // data: body !=='' ? JSON.parse(body) :body = {},                    
     
      
    //   })
     
    //   // .then(data =>  data.json())
    //   .then(data => setList(data.data.results) )
    //   .catch(console.error);

    /**----------------- */

    // try {
    //   let myData = await apiHandler(todoAPI, "get");
     
    //   setList(myData.data.results);
    // } catch (error) {
    //   console.error(error.message);
    // }

    apiHandler(todoAPI, "get")
    .then((results) => {
      setList( context.data );

    })

    .catch(console.error);

  };

  const deleteItem = async (id) => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      // fetch(url, {
      //   method: 'delete',
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(item)
      // })

      /*---------------------------*/
      // axios({
      //   method: 'delete',
      //   url: url,
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      //   data: JSON.stringify(item),
      // })
      //   // .then(response => response.json())
      //   .then(data => {
      //     console.log(data,'ssssssssssss')
      //     // setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));

      //     let myId = list.indexOf(item)
      //   console.log('ahmad')
      //    console.log(list,'33333')
      //     let myList = [...list]
      //     myList.splice(myId, 1);
      //     console.log(list,"jj")
      //     setList(myList);
      //   })
        /*--------------------------------*/
         try {
        await apiHandler(url, "delete", item);
        let myId = list.indexOf(item)
        
          let myList = [...list]
          myList.splice(myId, 1);
        
          setList(myList);
      } catch (error) {
        console.error(error.message);
      }
        // .catch(console.error);
        
    }
  }

  const editItem = async (id,value)=> {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.text = value;

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      // fetch(url, {
      //   method: 'put',
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(item)
      // })
      //   .then(response => response.json())
      //   .then(savedItem => {
      //     setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
      //   })
      /**------------------------------- */
      // axios({
      //   method: 'put',
      //   url: url,
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   headers: { 'Content-Type': 'application/json' },
      //   data: JSON.stringify(item),
      // })
      // .then(response => response.json())
      //   .then(savedItem => {
      //     setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
      //   })
      // // .then(savedItem => {
      // //   setList([...list, savedItem.data])
      // // })
      // // .then(savedItem => {
      // //       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
      // //     })
      //   .catch(console.error);
      /**------------------------------- */

      apiHandler(url, "put", item)
      .then((savedItem) => {
        setList(
          list.map((listItem) =>
            listItem._id === item._id ? savedItem.data : listItem
          )
        );
      })
      .catch(console.error);
  }
    }
 
  

  useEffect(_getTodoItems, [context]);


  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
        <CompletedSettings />
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete = {deleteItem}
            handleEdit = {editItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo1;
