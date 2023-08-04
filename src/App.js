import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ThemeChanger } from "./components/ThemeContext";

// import './assests/App.css';

import FunFactPage from "./pages/FunFactPage";
import TodoListPage from "./pages/TodoListPage";
import CounterPage from "./pages/CounterPage";
import NotFoundPage from "./pages/NotFoundPage";
import AllAppsPage from "./pages/AllItemsPage";

function App() {
  return (
    <ThemeChanger>
      <BrowserRouter>
        <Routes>
          <Route path="/AllItems" element={<AllAppsPage />} />
          <Route path="/TodoList" element={<TodoListPage />} />
          <Route path="/FunFact" element={<FunFactPage />} />
          <Route path="/Counter" element={<CounterPage />} />
          <Route index element={<Navigate to="/TodoList" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeChanger>
  )
}

export default App;
