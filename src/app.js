import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo1 from './components/todo/todo-connected'
import IncompleteTasks from './context/item-completed'
import LoginContext from './context/auth'
import CompletedLogin from './components/todo/login'
// import RenderPagination from './components/todo/pagination'
import ACL from './components/todo/acl';


export default function App()  {
  
    return (

      
    
      <IncompleteTasks >
      
      <LoginContext> 
      
      <CompletedLogin />
      
      <>
   
        {/* <ToDo /> */}
       
        <ACL capability="read">
        
        <ToDo1 />
       {/* <RenderPagination />  */}
        
        </ACL>
         
       
      </>
      </LoginContext>
      
     
    
     
      </IncompleteTasks>
     
   
    
    );
  
}




