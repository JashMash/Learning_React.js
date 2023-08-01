import React from "react"


function Form_event_handling({onTaskAdded}) {
    
    const onSubmit =()=>{
        // This stops page from refreshing
        event.preventDefault();
        console.log(`The task input is: ${event.target.task_inp.value}`);
        // debugger;
        onTaskAdded(event.target.task_inp.value);
        event.target.task_inp.value ="";
        // return false;
    };
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <h3>Please enter your task here:</h3>
                <input type="text" name="task_inp"/>
                <strong>
                    <input type="submit" value="Submit" />
                </strong>
            </form>
        </>
    )
}

export default Form_event_handling;