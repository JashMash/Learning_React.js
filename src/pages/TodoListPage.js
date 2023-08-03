import React from "react";

import MainLayout from "../layout/MainLayout.js"
import TodoList from "../components/TodoList.js";

const TodoListPage = () => {

    return (
        <>
            <MainLayout>
                <TodoList title="Immidiate" />
                <br></br>
                <TodoList title="Long Term" />
            </MainLayout>

        </>
    )
}

export default TodoListPage;