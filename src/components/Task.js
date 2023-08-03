import React from "react";


const Task = (props) =>{
    /*
        Task description 
    */ 

    // const onChecked = ()=>{

    // }


    /*
    Call backs:
        based on checkbox:
        (send back to top level to change location)
        call back function ( for done and in progress)
    */ 
   return(<>
    
    {/* Checkbox */}
    <input type="checkbox"></input>
    <br></br>
    {/* Label of task */}
    <label>{}</label>
   </>)
}

export default Task;