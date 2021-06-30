import React, { useEffect, useState } from 'react';
import useAjax from '../hooks/useAjax';


const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

export const CompletedItem = React.createContext();

const IncompleteTasks = (props) =>{

    
    let [apiHandler] = useAjax();


    let  toggleMode = () => {
        setToggle( state.checked === false ? true : false )
    };


     const [myData, setData] = useState([]);
     const [toggle, setToggle] = useState(false)
    

    let state = {
        checked: toggle, 
        data: myData,
        toggle: toggleMode
    }
 
    useEffect( ()=>{
        (async ()=> {
           
            let results = await apiHandler(todoAPI, 'get')
            let list = results.data.results.filter(val => val.complete === false);
            console.log( results.data.results,'5555555555');
            if(state.checked === false){
               
                setData(list)
                
            }
             else if(state.checked === true) {
                let results = await apiHandler(todoAPI, 'get')
                let list = results.data.results.filter(val => val.complete === true);
                // setData(results.data.results)
                setData(list)
            }
        })();
}, [state.checked])
        

    

    return(
        <CompletedItem.Provider value={state}>
           
           {props.children}
        </CompletedItem.Provider>
    )
}

export default IncompleteTasks;




