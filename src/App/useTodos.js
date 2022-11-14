import React from 'react';
import { useLocalStorage } from './useLocalStorage';



function useTodos() {

    const {item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const {item: deleteTodos,
      saveItem: saveDeleteTodos,
    } = useLocalStorage('TODOS_DELETE', [])

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [filterComplete, setFilterComplete] = React.useState(false);
    const [filterUncomplete, setFilterUncomplete] = React.useState(false);
    const [filterDelete, setFilterDelete] = React.useState(false);
    const [language, setLanguage] = React.useState('spanish');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    

    const [fil, setFil] = React.useState("all");
    const [del, setDel] = React.useState("all");

    const addSpanish = () => {
      setLanguage('spanish');
    }
  
    const addEnglish = () => {
      setLanguage('english');
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
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        }); 
        saveTodos(newTodos);
        }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true; 
        saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        const todoComplete = newTodos[todoIndex].completed
        deleteTodos.push({
          text,
          completed: todoComplete,
        });
        saveDeleteTodos(deleteTodos);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    
    const fullDeleteTodo = (text) => {
      const todoIndex = deleteTodos.findIndex(todo => todo.text === text);
      const newTodos = [...deleteTodos];
      newTodos.splice(todoIndex, 1);
      saveDeleteTodos(newTodos);
    }

    const restoreTodo = (text) => {
      const todoIndex = deleteTodos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      const todoComplete = deleteTodos[todoIndex].completed
      newTodos.push({
        text,
        completed: todoComplete,
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

    const html = document.querySelector("#html");
    const root = document.querySelector("#root");
    const modal = document.querySelector("#modal"); 

    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
        html.classList.toggle('dark');
        root.classList.toggle('dark');
        modal.classList.toggle('dark');
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
      
      openModal,
    };

    const stateUpdaters = {
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
    };

    return { state, stateUpdaters };
 }


export { useTodos };