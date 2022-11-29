import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage';
import { PageNotFound } from './error/PageNotFound';
import { HomePage } from './home/HomePage';
import { TodoListPage } from './TodoList/TodoListPage';
import { NewTodoPage } from './new/NewTodoPage';
import { ProjectPage } from './ProjectPage/ProjectPage';
import { ContactPage } from './ContactPage/ContactPage';

function App() {

  return (
   
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tasks/" element={<TodoListPage/>}/>
          <Route path="/project/" element={<ProjectPage/>}/>
          <Route path="/contact/" element={<ContactPage/>}/>
          <Route path="/new/" element={<NewTodoPage/>}/>
          <Route path="/edit/:id" element={<EditTodoPage/>}/> 
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </HashRouter>

  );
}

export { App };
