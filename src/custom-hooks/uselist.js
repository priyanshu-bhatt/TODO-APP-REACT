// import { useState } from "react"
// //push to add value to the list
// //pull to remove the value
// const uselist=()=>{
//     const [list,setlist]= useState([])
//     const push =(value)=>{
//         const newlist = list.concat(value)
//         setlist(newlist)
//     }
//     const pull = (index)=>{

//         const newlist = list.filter((listitem,listindex) =>{
//             return listindex !== index
//         })
//         setlist(newlist)
//     }
//     return {
//         list:list,
//         push:push,
//         pull:pull
//     }
    
// }
// export default uselist

import * as React from 'react'
import { useState } from 'react';
import { ReactDOM } from "react";
const useList=()=>{
    const[list,setList]= useState([]);
    const push =(value)=>{
        if(value==="")
        {
            alert("Please type something to add");

            
            
//             {{<div class="alert alert-warning">
//     <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
//   </div>}}
        }
        else{
        const newlist = list.concat(value)
        setList(newlist)
        
    }
}

    const pull=(index)=>{
        const newlist = list.filter((listitem,listindex)=>{
            return listindex !==index
        })
        
        
        setList(newlist)

    }

    return{
        list:list,
        push:push,
        pull:pull
    }
}

export default useList;