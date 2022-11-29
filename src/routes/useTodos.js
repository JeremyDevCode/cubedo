import React from 'react';
import { useLocalStorage } from './useLocalStorage';



function useTodos() {

    const {item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V2', []);

    const {item: deleteTodos,
      saveItem: saveDeleteTodos,
    } = useLocalStorage('TODOS_DELETE', [])

    const {item: language = 'spanish',
      saveItem: saveLanguage,
    } = useLocalStorage('TODO_LANGUAGE', [])

    const {item: theme,
          saveItem: setTheme,
  } = useLocalStorage('TODO_THEME', 'light')

    const [searchValue, setSearchValue] = React.useState('');
    const [filterComplete, setFilterComplete] = React.useState(false);
    const [filterUncomplete, setFilterUncomplete] = React.useState(false);
    const [filterDelete, setFilterDelete] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    

    const [fil, setFil] = React.useState("all");
    const [del, setDel] = React.useState("all");

    const toggleTheme = () => {
      if(theme === 'light') {
        setTheme("dark")
      } else {
        setTheme("light")

      }        
    }

    const addSpanish = () => {
      saveLanguage('spanish')
    }
  
    const addEnglish = () => {
      saveLanguage('english')
    }

    const onClickIdiom = () => {
      if(language === 'spanish') {
        addEnglish(); 
      } else {
        addSpanish();
      }
    }  

    const toggleFilterComplete = () => {
        
        if(filterComplete === false) {
          setFilterComplete(true);
          setFilterUncomplete(false);
          setFil("complete");
        } else {
          setFilterComplete(false);
          setFil("all");
        }
        
        
      };

    const toggleFilterUncomplete = () => {
      if(filterUncomplete === false) {
        setFilterUncomplete(true);
        setFilterComplete(false);
        setFil("uncomplete");
      } else {
        setFilterUncomplete(false);
        setFil("all");
      }
    }

    const toggleFilterDeleted = () => {
      if(filterDelete === false) {
        setFilterDelete(true);
        setDel("delete");
      } else {
        setFilterDelete(false);
        setDel("all");
      }
    }

    const filter = () => {
      if (filterDelete) {
          const todosFilter = deleteTodos.filter((todo) => todo);
          
          if(filterComplete) {
            const todosFilter = deleteTodos.filter((todo) => todo.completed === false);
            return todosFilter.filter((todo) =>
              todo.text.toLowerCase().includes(searchValue.toLowerCase()));
          }

          if(filterUncomplete) {
            const todosFilter = deleteTodos.filter((todo) => todo.completed === true);
            return todosFilter.filter((todo) =>
              todo.text.toLowerCase().includes(searchValue.toLowerCase()));
          }

        return todosFilter.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

      } else if (filterComplete) {
          const todosFilter = todos.filter((todo) => todo.completed === false);
          return todosFilter.filter((todo) =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
          );
      } else if (filterUncomplete) {
          const todosFilter = todos.filter((todo) => todo.completed === true);
          return todosFilter.filter((todo) =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
          );
        } else {
          return todos.filter((todo) =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
          );
        }
      };

    const totalDelete = deleteTodos.length;
    

    const todosFiltered = filter();
    
    
    const addTodo = (text) => {
      const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
            id
        }); 
        saveTodos(newTodos);
    }

    const getTodo = (id) => {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      return todos[todoIndex];
    }

    const editTodo = (id, newText) => {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos[todoIndex].text = newText; 
      saveTodos(newTodos);
  }

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true; 
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        const todoComplete = newTodos[todoIndex].completed;
        const todoText = newTodos[todoIndex].text;
        deleteTodos.push({
          text: todoText,
          completed: todoComplete,
          id,
        });
        saveDeleteTodos(deleteTodos);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    
    const fullDeleteTodo = (id) => {
      const todoIndex = deleteTodos.findIndex(todo => todo.id === id);
      const newTodos = [...deleteTodos];
      newTodos.splice(todoIndex, 1);
      saveDeleteTodos(newTodos);
    }

    const restoreTodo = (id) => {
      const todoIndex = deleteTodos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      const todoComplete = deleteTodos[todoIndex].completed;
      const todoText = deleteTodos[todoIndex].text;
      newTodos.push({
        text: todoText,
        completed: todoComplete,
        id,
      });
      saveTodos(newTodos);
      deleteTodos.splice(todoIndex, 1);
      saveDeleteTodos(deleteTodos);
    }

    const contTodo = (text) => {
        const nTodos = [...todos];
       for (const todo of nTodos) {
        if(text === todo.text) return true;
       }
      
    }

    const delTodo = (text) => {
      const nTodos = [...deleteTodos];
      for (const dtodo of nTodos) {
        if(text === dtodo.text) return true;
       }
    }

    const state = {
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

      getTodo,
      setTheme
    };

    const stateUpdaters = {
      toggleTheme,
      addSpanish,
      addEnglish,
      onClickIdiom,
    
      setSearchValue,
    
      addTodo,
      editTodo,
      completeTodo,
      deleteTodo,
      fullDeleteTodo,
      restoreTodo,
      contTodo,
      delTodo,
      
      toggleFilterComplete,
      toggleFilterUncomplete,
      toggleFilterDeleted,
    };

    return { state, stateUpdaters };
 }

 function newTodoId(todoList) {
  
  if(!todoList.length) {
    return 1;
  }

  const idList = todoList.map(todo => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;

  // return Date.now().toString(16);
 }


export { useTodos };