/*
Super important:

https://codingbeautydev.com/blog/react-get-input-value-on-change/

*/

import React from "react";

import Form_event_handling from './Form_event_handling.js';
import TodoFormErrorH from "./TodoFormErrorH.js";

import sign_img from "./assests/imgs/sign-Language-images-basic.jpg"
import long_exposure_img from "./assests/imgs/samuele-errico-piccarini-t4OxCpKie70-unsplash.jpg"

function TodoList({title}) {
    const [all_tasks, setTasks] = React.useState([]);

    const onTaskAddedCallBack = (task) => {
        //Short/Fast way 
        setTasks([...all_tasks, { "task": task, "done": false }]);
        // debugger;
    };

    const changeTaskState = (task_index, state) => {
        var copy_input_task = all_tasks[task_index].task;
        var copy_tasks = all_tasks;
        var index = parseInt(0);
        all_tasks.forEach(function (curr_task) {
            if (curr_task.task == copy_input_task) {
                copy_tasks[index].done = state;
                return;
            }
            index += 1;
        })
        setTasks([...copy_tasks]);
    }

    const toggleTaskCompletion = (event) => {
        const id_val = event.target.id;
        var checkbox = document.getElementById(id_val)//document.querySelectorAll("input[type='checkbox']:checked");
        if (checkbox.length == 0) {
            return;
        }

        if (checkbox.checked) {
            //Task is done       
            changeTaskState(id_val, true);
        } else {
            // Task is undone
            changeTaskState(id_val, false);
        }

    };





    // Displaying the updated tasks
    // short way
    const task_items_displayed = [];
    // const all_tasks_copy = all_tasks;
    var index = parseInt(0);

    for (const curr_task of all_tasks) {
        if (curr_task.done) {
            // Striking the done task using id 
            var task_text = <s>{curr_task.task}</s>
        } else {
            // Removing Strike through
            var task_text = curr_task.task;
        }
        task_items_displayed.push(
            <>
                <input onClick={toggleTaskCompletion} type="checkbox" id={index} ></input>
                <label id={`${index}_task`}>{task_text}</label>
                <br></br>
            </>
        );
        index += 1;
    }

    const done_task_items_displayed = [];
    for (const curr_task of all_tasks) {
        if (curr_task.done) {
            // Striking the done task using id 
            done_task_items_displayed.push(<li id={`${index}_task`}>{curr_task.task}</li>);
            index += 1;
        }
    }

    console.log(all_tasks);
    return (
        <>
            <h2>{title} Task List:</h2>
            <div className="row">
                <div className="col">
                    <ul>
                        {/* Long way */}
                        {task_items_displayed}
                    </ul>

                    <Form_event_handling onTaskAdded={onTaskAddedCallBack} />
                    
                </div>
                <div className="col">
                    <label>Done Tasks:</label>
                    <ul>
                        {done_task_items_displayed}
                    </ul>

                </div>
            </div>
        </>
    );
};


export default TodoList;
