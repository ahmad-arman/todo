import React, { useContext } from 'react';
import {CompletedItem}  from '../../context/item-completed';

const CompletedItemsProvider = (props) => {

    const context = useContext(CompletedItem)
    console.log(context,'*****************');

   
  

    return (
        <>
           
            {/* { console.log("🚀 ~ file: completed-settings.jsx ~ line 7 ~ CompletedTasksProvider ~ context", context)} */}
            <input type="checkbox" name="completed" id="completed" checked={context.checked} onChange={context.toggle}></input>
            <label >Show Completed Task</label>
           
        </>
    
    )
    
}

export default CompletedItemsProvider;
