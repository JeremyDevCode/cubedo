import React from 'react';
import { TodoContext } from '../TodoContext';
import { NavBar } from '../NavBar';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoStart } from "../TodoStart";
import { TodoFiltered } from "../TodoFiltered";
import { TodoDelete } from '../TodoDelete';
import { TodoSearched } from '../TodoSearched';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoFilter } from '../TodoFilter';
import { TodoOptions } from '../TodoOptions';
import { TodoFooter } from '../TodoFooter';


function AppUI() {

    const { 
        error,
        loading, 
        todosFiltered,
        searchValue,
        totalDelete, 
        completeTodo, 
        deleteTodo,
        fullDeleteTodo,
        fil,
        del,
        restoreTodo,
        openModal,
        setOpenModal,
        theme, 
        toggleTheme,
    } = React.useContext(TodoContext);

    return (
        <>
    <div className='App' id={theme}>


        <NavBar toggleTheme = {toggleTheme}/>
            <TodoCounter />
                
            <TodoSearch />
            <TodoOptions/>
                    <TodoList>
                   
                        { error && <TodoError /> }
                        { loading && <TodoLoading />}
                        { (!error && !loading && !todosFiltered.length && !!searchValue) && <TodoSearched/>}
                        { (!error && !loading && !todosFiltered.length && !searchValue && del !== "delete" && (fil !== "complete") && (fil !== "uncomplete")) && <TodoStart />}
                        { (!error && !loading && !totalDelete && !searchValue && del === "delete" && (fil !== "complete") && (fil !== "uncomplete")) && <TodoDelete /> }
                        { (!error && !loading) && !todosFiltered.length && !searchValue && (fil === "complete" || fil === "uncomplete")  && <TodoFiltered /> }
                        

                        { todosFiltered.map(todo => (
                        <TodoItem 
                        key = {todo.text} 
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                        onFullDelete = {() => fullDeleteTodo(todo.text)}
                        OnRestore = {() => restoreTodo(todo.text)}
                        fullDeleteTodo = {fullDeleteTodo}
                        />
                        )) }
                    </TodoList>

                    {!!openModal && (
                        <Modal>
                            <TodoForm />
                        </Modal>
                    )}
            { error ||
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />}

            { error || 
                <TodoFilter/>}

            <TodoFooter/>
    </div>
    </>
    );
}

export { AppUI };