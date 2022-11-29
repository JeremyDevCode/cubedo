import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useTodos } from '../useTodos';

import { TodoHeader } from '../../ui/TodoHeader';
  import { NavBar } from '../../ui/NavBar';
  import { TodoCounter } from "../../ui/TodoCounter";
  import { TodoSearch } from "../../ui/TodoSearch";

import { TodoStart } from "../../ui/TodoStart";
import { TodoFiltered } from "../../ui/TodoFiltered";
import { TodoDelete } from '../../ui/TodoDelete';
import { TodoSearched } from '../../ui/TodoSearched';
import { TodoError } from '../../ui/TodoError';
import { TodoLoading } from '../../ui/TodoLoading';
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";

import { CreateTodoButton } from '../../ui/CreateTodoButton';

import { TodoFilter } from '../../ui/TodoFilter';
import { TodoOptions } from '../../ui/TodoOptions';
import { TodoFooter } from '../../ui/TodoFooter';



function TodoListPage() {

  const navigate = useNavigate();
  
  const { 
    state,
    stateUpdaters,
} = useTodos();

const {
  theme,
  language,

  loading,
  error,

  searchValue,

  totalTodos,
  completedTodos,

  del,
  totalDelete,

  fil,
  todosFiltered,
  
//  openModal,
} = state;

const {
  toggleTheme,
  onClickIdiom,

  setSearchValue,

  // addTodo,
  completeTodo,
  deleteTodo,
  fullDeleteTodo,
  restoreTodo,
  // contTodo,
  // delTodo,
  
  toggleFilterComplete,
  toggleFilterUncomplete,
  toggleFilterDeleted,

 // setOpenModal,
} = stateUpdaters;

const [params, setParams] = useSearchParams();

const html = document.querySelector("#html");
const root = document.querySelector("#root");

  if(theme === 'light') {
    html.classList.remove('dark');
    root.classList.remove('dark');
  } else {
    html.classList.add('dark');
    root.classList.add('dark');
  }
 
  return (
    <>
        <div className='App' id={theme}>


            <TodoHeader>

                <NavBar 
                  toggleTheme = {toggleTheme}
                  theme = {theme}
                  language = {language}
                  onClickIdiom = {onClickIdiom}
                  
                  />

                <TodoCounter 
                    totalTodos = {totalTodos}
                    completedTodos = {completedTodos}
                    totalDelete = {totalDelete}
                    del = {del}
                    language = {language}
                    loading = {loading}
                />

                <TodoSearch 
                    searchValue = {searchValue}
                    setSearchValue = {setSearchValue}
                    loading = {loading}
                    params={params}
                    setParams={setParams}
                />

                <TodoOptions
                  toggleFilterComplete = {toggleFilterComplete}
                  toggleFilterUncomplete = {toggleFilterUncomplete}
                  fil = {fil}
                  language = {language}
                  onClickIdiom = {onClickIdiom}

                />

            </TodoHeader>


              <TodoList

              
                error = {error}
                onError = {() => <TodoError
                  language = {language}
                />}

                loading = {loading}
                onLoading = {() => <TodoLoading/>}

                todosFiltered = {todosFiltered}
                onEmptyTodos = {() => <TodoStart
                  language = {language}
                />}

                totalDelete = {totalDelete}
                del = {del}
                onEmptyDelete = {() => <TodoDelete
                  language = {language}
                />}

                searchValue = {searchValue}
                onEmptySearchResults = {() => <TodoSearched
                  language = {language}
                  searchValue = {searchValue}
                />}

                fil = {fil}
                onEmptyFilter = {() => <TodoFiltered
                  fil = {fil}
                  language = {language}
                />}
  
                render = {todo => (
                    <TodoItem 
                    key = {todo.id} 
                    text = {todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodo(todo.id)}
                    onEdit = {() => navigate('/edit/' + todo.id, {state: { todo }})}
                    onDelete = {() => deleteTodo(todo.id)}
                    onFullDelete = {() => fullDeleteTodo(todo.id)}
                    OnRestore = {() => restoreTodo(todo.id)}
                    fullDeleteTodo = {fullDeleteTodo}
                    del = {del}
                    />
                  )}
              >
    

                
              
                    {/* { error && <TodoError 
                      language = {language}
                    /> }
                    { loading && <TodoLoading />}
                    { (!error && !loading && !todosFiltered.length && !!searchValue) && <TodoSearched
                      searchValue = {searchValue}
                      language = {language}

                    />}
                    { (!error && !loading && !todosFiltered.length && !searchValue && del !== "delete" && (fil !== "complete") && (fil !== "uncomplete")) && <TodoStart 
                      language = {language}
                    />}
                    { (!error && !loading && !totalDelete && !searchValue && del === "delete" && (fil !== "complete") && (fil !== "uncomplete")) && <TodoDelete 
                      language = {language}
                    /> }
                    { (!error && !loading) && !todosFiltered.length && !searchValue && (fil === "complete" || fil === "uncomplete")  && <TodoFiltered 
                      fil = {fil}
                      language = {language}
                    /> } */}
                    

                    {todo => (
                    <TodoItem 
                    key = {todo.id} 
                    text = {todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onEdit = {() => navigate('/edit')}
                    onDelete = {() => deleteTodo(todo.text)}
                    onFullDelete = {() => fullDeleteTodo(todo.text)}
                    OnRestore = {() => restoreTodo(todo.text)}
                    fullDeleteTodo = {fullDeleteTodo}
                    del = {del}
                    />
                    )} 
                </TodoList>

                {/* {!!openModal && (
                    <Modal>
                        <TodoForm 
                          addTodo = {addTodo}
                          setOpenModal = {setOpenModal}
                          contTodo  = {contTodo} 
                          delTodo = {delTodo}
                          language = {language}
                        />
                    </Modal>
                )} */}

        { error ||
        <CreateTodoButton 
            onClick={() => navigate('/new')}
            // setOpenModal = {setOpenModal}
            // openModal = {openModal}
        />}

        { error || 
            <TodoFilter
              del = {del}
              toggleFilterDeleted = {toggleFilterDeleted}
            />}

        <TodoFooter/>

       
  </div>
  </>
  );
}

export { TodoListPage };
