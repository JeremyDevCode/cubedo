import React from 'react';

import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
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


function App() {

  
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
  
  openModal,
} = state;

const {
  toggleTheme,
  addSpanish,
  addEnglish,

  setSearchValue,

  addTodo,
  completeTodo,
  deleteTodo,
  fullDeleteTodo,
  restoreTodo,
  contTodo,
  delTodo,
  
  toggleFilterComplete,
  toggleFilterUncomplete,
  toggleFilterDeleted,

  setOpenModal,
} = stateUpdaters;

 
  return (
    <>
        <div className='App' id={theme}>


            <TodoHeader>

                <NavBar 
                  toggleTheme = {toggleTheme}
                  theme = {theme}
                  language = {language}
                  addSpanish = {addSpanish}
                  addEnglish = {addEnglish}  
                  
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
                />

                <TodoOptions
                  toggleFilterComplete = {toggleFilterComplete}
                  toggleFilterUncomplete = {toggleFilterUncomplete}
                  fil = {fil}
                  language = {language}
                  addSpanish = {addSpanish}
                  addEnglish = {addEnglish}

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
                    key = {todo.text} 
                    text = {todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                    onFullDelete = {() => fullDeleteTodo(todo.text)}
                    OnRestore = {() => restoreTodo(todo.text)}
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
                    key = {todo.text} 
                    text = {todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                    onFullDelete = {() => fullDeleteTodo(todo.text)}
                    OnRestore = {() => restoreTodo(todo.text)}
                    fullDeleteTodo = {fullDeleteTodo}
                    del = {del}
                    />
                    )} 
                </TodoList>

                {!!openModal && (
                    <Modal>
                        <TodoForm 
                          addTodo = {addTodo}
                          setOpenModal = {setOpenModal}
                          contTodo  = {contTodo} 
                          delTodo = {delTodo}
                          language = {language}
                        />
                    </Modal>
                )}
        { error ||
        <CreateTodoButton 
            setOpenModal = {setOpenModal}
            openModal = {openModal}
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

export default App;
