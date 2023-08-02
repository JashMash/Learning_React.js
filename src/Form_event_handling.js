import React from "react"

import TodoFormErrorH from "./TodoFormErrorH.js";

function Form_event_handling({ onTaskAdded }) {

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
                <input type="text" name="task_inp" />
                <strong>
                    <input type="submit" value="Submit" />
                </strong>
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