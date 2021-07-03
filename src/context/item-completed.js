import React, { useEffect, useState } from 'react';
import useAjax from '../hooks/useAjax';
import '../components/todo/style.scss';


const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

export const CompletedItem = React.createContext();

const IncompleteTasks = (props) =>{

    
    let [apiHandler] = useAjax();


    let  toggleMode = () => {
        setToggle( state.checked === false ? true : false )
    };


     const [myData, setData] = useState([]);
     const [toggle, setToggle] = useState(false)

    //  const [currentItem,setCurrentItem] =useState('')

   
     const [currentPage , setCurrentPage] = useState(1)
     const [itemPerPage, setItemPerPage] = useState(3)
     const [pageNumberLimit ,setPageNumberLimit] = useState(5)
     const [maxPageNumberLimit ,setMaxPageNumberLimit] = useState(5)
     const [minPageNumberLimit ,setMinPageNumberLimit] = useState(0)

     let pages =[];
     
     for (let i = 1; i <Math.ceil(myData.length/itemPerPage); i++){
         pages.push(i)
     } 
     const handelClick = (e)=>{
         setCurrentPage(Number(e.target.id))
     }

     const indexOfLastItem =currentPage*itemPerPage;
     const indexOfFirstItem =indexOfLastItem - itemPerPage;
     const currentItem =myData.slice(indexOfFirstItem,indexOfLastItem)
    //  console.log(currentItem,'//////////////////////')
    //  console.log(myData,'myData')

    //  console.log(pages,'pages');

     const renderPageNumber = pages.map((number)=>{
         if(number <maxPageNumberLimit+1 && number >minPageNumberLimit){

            return <li key={number} id={number}
             onClick={handelClick}
              className ={currentPage === number ? "active" : null} > 

            {number} 

            </li>
         }else{
             return null
         }
     })

     const handlePrevPage = () =>{
         setCurrentPage(currentPage -1)
         if((currentPage -1 )% pageNumberLimit===0){
            setMaxPageNumberLimit(maxPageNumberLimit -pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit  - pageNumberLimit)
        }

     }

     const handleNextPage = () =>{
        setCurrentPage(currentPage +1)
        if(currentPage +1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit +pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit +pageNumberLimit)
        }
    }

    const handlerLimitPerPage =(e)=>{
        e.preventDefault();
        console.log('herokuapp')
        console.log(e.target.number.value,'e')
     
        setItemPerPage(e.target.number.value);
    }
       
     
     console.log(renderPageNumber,'function')



    const [sort ,setSort] = useState(currentItem)

    useEffect(()=>{
        
    })

   
 

     const handlerSort = (e) => {

       setItemPerPage(myData.length)
       console.log(myData.length , 'assssssssssssssssssssssssssssssssssssssssssssssssssssssss')

        // console.log(myData.length,'data899999999999999999999999999999')
       myData.sort(function (a, b) { 
            
            console.log(a.difficulty - b.difficulty,'sdhjdshjhdshjdshjhdhdsd')
            return b.difficulty - a.difficulty;

          });
          
        // console.log(sort,'sddddddddddd')
        //   setData(currentItem)
        //  console.log(currentItem,'data////////////////////////////////////////')
        //  console.log(pages,'shurewwwwwwwwwwwwwwwwwwwwwwwww')
    //    console.log(setData(ahmad),'6666666666666666666666666666666666666666666')   
        
        // console.log(e.target.value)

    }


    // setCurrentItem(currentItem)
       
     let ahmad = {handlerLimitPerPage,handleNextPage,handlePrevPage,handleNextPage ,renderPageNumber ,handelClick ,handlerSort,currentPage,pages};
    let state = {
        checked: toggle, 
        data: myData,
        toggle: toggleMode,
        Page:pages,
        currentItem:currentItem ,
        ahmad:ahmad
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
        {/* {  <ul className="renderPageNumber">
              <li>
                  <button  onClick={handlePrevPage} disabled={currentPage===pages[0] ? true : false}>Prev</button>
              </li>

              {renderPageNumber}

              <li>
                  <button onClick={handleNextPage} disabled={currentPage===pages[pages.length-1]  ? true : false}>Next</button>
              </li>
           
              
              
            </ul>
            <form onSubmit={handlerLimitPerPage}>
                <label>enter number item on page as you want</label>
            <input type="number" name="number" id="number"></input>

            <select defaultValue="sort" onChange={handlerSort}>
                <option disabled value="sort"> sort </option>
                <option  value="one"> descending on depend  difficulty </option>
               
            </select>
            </form>} */}

             
        

         
           
 
            
        </CompletedItem.Provider>
    )
}

export default IncompleteTasks;




