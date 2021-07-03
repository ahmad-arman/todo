import React, { useEffect, useState ,useContext} from 'react';
// import useAjax from '../hooks/useAjax';
import './style.scss';
import {CompletedItem} from '../../context/item-completed';



const RenderPagination = (props) =>{

    const context = useContext(CompletedItem);
   console.log( context ,'context.ahmad') ;
    

    return(
      
      
  <>
  
  <ul className="renderPageNumber">
              <li>
                  <button  onClick={ context.ahmad.handlePrevPage} disabled={context.ahmad.currentPage===context.ahmad.pages[0] ? true : false}>Prev</button>
              </li>

              {context.ahmad.renderPageNumber}

              <li>
                  <button onClick={context.ahmad.handleNextPage} disabled={context.ahmad.currentPage===context.ahmad.pages[context.ahmad.pages.length-1]  ? true : false}>Next</button>
              </li>
           
              
              
            </ul>
            <form onSubmit={context.ahmad.handlerLimitPerPage}>
                <label>enter number item on page as you want</label>
            <input type="number" name="number" id="number"></input>

            <select defaultValue="sort" onChange={context.ahmad.handlerSort}>
                <option disabled value="sort"> sort </option>
                <option  value="one"> descending on depend  difficulty </option>
                {/* <option  value="five">  difficulty from 5-1  </option> */}
            </select>
            </form>
  </>



             
        

         
           
 
            
      
    )
}

export default RenderPagination;





