import axios from 'axios'; 
import React, { useEffect, useState } from 'react';
const useAjax = () =>{

   const apiHandler= async (url,method, body=null)=>{


  
    return await  axios({
                method: method,
                url: url,
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify(body),
              })
  }
  return [apiHandler]

}
//  const [list, setList] = useState([]);

//  const _addItem = (item) => {
//    item.due = new Date();
//    // fetch(todoAPI, {
//    //   method: 'post',
//    //   mode: 'cors',
//    //   cache: 'no-cache',
//    //   headers: { 'Content-Type': 'application/json' },
//    //   body: JSON.stringify(item)
//    // })
//    //   .then(response => response.json())
//    //   .then(savedItem => {
//    //     setList([...list, savedItem])
//    //   })
//    axios({
//      method: 'post',
//      url: api,
//      mode: 'cors',
//      cache: 'no-cache',
//      headers: { 'Content-Type': 'application/json' },
//      data: JSON.stringify(item),
//    })
//    .then(savedItem => {
//      setList([...list, savedItem.data])
//    })
//      .catch(console.error);
//  };

//  const _toggleComplete = id => {

//    let item = list.filter(i => i._id === id)[0] || {};

//    if (item._id) {

//      item.complete = !item.complete;

//      let url = `${api}/${id}`;

//      // fetch(url, {
//      //   method: 'put',
//      //   mode: 'cors',
//      //   cache: 'no-cache',
//      //   headers: { 'Content-Type': 'application/json' },
//      //   body: JSON.stringify(item)
//      // })
//      //   .then(response => response.json())
//      //   .then(savedItem => {
//      //     setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
//      //   })
//      axios({
//        method: 'put',
//        url: url,
//        mode: 'cors',
//        cache: 'no-cache',
//        headers: { 'Content-Type': 'application/json' },
//        data: JSON.stringify(item),
//      })
//      // .then(response => response.json())
//        .then(savedItem => {
//          setList(list.map(listItem => listItem._id === item._id ? savedItem.data: listItem));
//        })
//        .catch(console.error);
//    }
//  };



//  const _getTodoItems = () => {
//    // fetch(todoAPI, {
//    //   method: 'get',
//    //   mode: 'cors',
//    // })
//    axios({
//      method: 'get',
//      url: api,
//      // data: body !=='' ? JSON.parse(body) :body = {},                    
    
     
//      })
    
//      // .then(data =>  data.json())
//      .then(data => setList(data.data.results) )
//      .catch(console.error);
//  };

//  const deleteItem = id => {
//    let item = list.filter(i => i._id === id)[0] || {};

//    if (item._id) {

//      item.complete = !item.complete;

//      let url = `${api}/${id}`;

//      // fetch(url, {
//      //   method: 'delete',
//      //   mode: 'cors',
//      //   cache: 'no-cache',
//      //   headers: { 'Content-Type': 'application/json' },
//      //   body: JSON.stringify(item)
//      // })
//      axios({
//        method: 'delete',
//        url: url,
//        mode: 'cors',
//        cache: 'no-cache',
//        headers: { 'Content-Type': 'application/json' },
//        data: JSON.stringify(item),
//      })
//        // .then(response => response.json())
//        .then(data => {
//          console.log(data,'ssssssssssss')
//          // setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));

//          let myId = list.indexOf(item)
//        console.log('ahmad')
//         console.log(list,'33333')
//          let myList = [...list]
//          myList.splice(myId, 1);
//          console.log(list,"jj")
//          setList(myList);
//        })
//        // .catch(console.error);
       
//    }
//  }

//  const editItem = (id,value)=> {
//    let item = list.filter(i => i._id === id)[0] || {};

//    if (item._id) {

//      item.text = value;

//      item.complete = !item.complete;

//      let url = `${api}/${id}`;

//      // fetch(url, {
//      //   method: 'put',
//      //   mode: 'cors',
//      //   cache: 'no-cache',
//      //   headers: { 'Content-Type': 'application/json' },
//      //   body: JSON.stringify(item)
//      // })
//      //   .then(response => response.json())
//      //   .then(savedItem => {
//      //     setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
//      //   })
//      axios({
//        method: 'put',
//        url: url,
//        mode: 'cors',
//        cache: 'no-cache',
//        headers: { 'Content-Type': 'application/json' },
//        data: JSON.stringify(item),
//      })
//      .then(response => response.json())
//        .then(savedItem => {
//          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
//        })
//      // .then(savedItem => {
//      //   setList([...list, savedItem.data])
//      // })
//      // .then(savedItem => {
//      //       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
//      //     })
//        .catch(console.error);
//    }

//  }
//  useEffect(_getTodoItems, []); 
//  return [list, _addItem,_toggleComplete,_getTodoItems,deleteItem,editItem] ;

// }

export default useAjax ;



