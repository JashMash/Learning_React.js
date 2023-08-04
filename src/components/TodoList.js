/*
Super important:

https://codingbeautydev.com/blog/react-get-input-value-on-change/

*/

import React from "react";

import Form_event_handling from '../components/TodoForm.js';
import TodoFormErrorH from "../components/TodoFormErrorH.js";

/*
- Apply Bootstrap's grid system to structure the layout. @@
- Use Bootstrap's "Card" component to display the list of tasks.@@
- Style the task items using Bootstrap classes like "list-group-item." @@
- Utilize Bootstrap's "Badge" component for displaying task completion status. @@
- Apply custom CSS styles as needed to enhance the design.
*/



function TodoList({ title }) {
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
                // return;
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
            <li className="list-group-item">
                
                <input  onClick={toggleTaskCompletion} type="checkbox" id={index} ></input>
                <span> </span>
                <label className="card-text" id={`${index}_task`}>{task_text}</label>
                {curr_task.done == true? <a href="#" className="badge badge-success">Completed</a> : null}
                <br></br>
            </li>
            </>
        );
        index += 1;
    }

    const done_task_items_displayed = [];
    for (const curr_task of all_tasks) {
        if (curr_task.done) {
            // Striking the done task using id 
            done_task_items_displayed.push(<><li className="list-group-item" id={`${index}_task`}>{curr_task.task}</li></>);
            index += 1;
        }
    }

    console.log(all_tasks);
    return (
        <>
            <h2>{title} Task List:</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">

                        <div className="card-body">
                        <h4 className="card-title">Tasks:</h4>
                        <div className="card-text">
                        <ul className="list-group">
                            {/* Long way */}
                            {task_items_displayed}
                        </ul>
                        </div>
                        </div>
                        </div>

                        <Form_event_handling onTaskAdded={onTaskAddedCallBack} />

                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                            <h4>Done Tasks:</h4>
                            <div className="card-text">
                            <ul className="list-group">
                            {done_task_items_displayed}
                            </ul>
                            </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

            
        </>
    );
};


export default TodoList;
