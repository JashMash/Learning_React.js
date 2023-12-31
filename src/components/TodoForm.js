import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoFormErrorH from "./TodoFormErrorH.js";

//Importing from json file
import json_tasks from "../assests/tasks.json"


/*
@@ Apply Bootstrap's "Form" and "InputGroup" components for the form layout.
Use Bootstrap's "Button" component for the "Add Task" button.
Implement responsive styling for a user-friendly experience on different devices.
*/


function Form_event_handling({ onTaskAdded }) {

    const handleAddTask = () => {
        // Adding Random task from tasks.json

        // Importing from json file
        const imported_tasks = json_tasks.tasks;

        // Getting a random number
        const index = (Math.random() * (imported_tasks.length - 1)).toFixed(0);

        const random_task = imported_tasks[index];

        //Error Handling
        const error = errorChecker(random_task);

        // debugger;
        if (!error) {
            onTaskAdded(random_task);
        }
    }

    React.useEffect(handleAddTask, []);

    const [errors, setErrors] = React.useState([]);
    // I tried to make a another file for the error handling but wasnt sure
    // how to search for the solution I was looking for
    const errorChecker = (text_inp) => {
        const new_errors = [];
        if (text_inp == '') {
            new_errors.push("Error! Input can NOT be empty.");
        } else if (text_inp.trim() == '') {
            new_errors.push("Error! Task can NOT be just whitespace.");
        }
        setErrors(new_errors);

        return new_errors.length > 0 ? true : false;
    }

    const errorsList = errors.map(
        (error, index) => <li key={index}> {error}</li>
    );

    const onSubmit = () => {
        // This stops page from refreshing
        event.preventDefault();

        const input_text = event.target.task_inp.value;
        console.log(`The task input is: ${input_text}`);

        //Error Handling
        const error = errorChecker(input_text);

        // debugger;
        if (!error) {
            onTaskAdded(input_text);
            event.target.task_inp.value = "";
        }
        // return false;
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <h3>Please enter your task here:</h3>
                <div className="input-group">
                    <input className="form-control" type="text" name="task_inp" />
                    <div className="input-group-append">
                    <strong >
                        <input className="btn btn-outline-secondary" type="submit" value="Submit" />
                        <button className="btn btn-outline-secondary" type="button" onClick={handleAddTask}>Generate Random Task</button>
                    </strong>
                    </div>
                </div>
                {/* <TodoFormErrorH/> */}
                <ul>
                    {/* {errorsList} */}
                    {errors.map((error, index) => <li key={index}> {error}</li>)}
                </ul>
            </form>
            
        </>
    )
}

export default Form_event_handling;