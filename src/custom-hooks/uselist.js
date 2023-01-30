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
