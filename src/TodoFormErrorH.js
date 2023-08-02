
import React from "react";

const TodoFormErrorH = ({ task }) => {
    const [errors, setErrors] = React.useState([]);

    const errorChecker =(text_inp)=>{
        const new_errors = errors;
        if (text_inp ==''){
            new_errors.push("Error! Input can NOT be empty.");
        } else if (text_inp.trim() ==''){
            new_errors.push("Error! Task can NOT be just whitespace.");
        }
        setErrors(new_errors);
        
        return new_errors.length >0 ? true : false;
    }


    const errorsList = errors.map(
        (error, index) => <li key={index}> {error}</li>
    );

    return (
        <>
            <ul>
                {errorsList}
            </ul>
        </>
    )


}

export default TodoFormErrorH;