import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../routes/useTodos";

import "./TodoForm.css";

function TodoForm({ language, label, submitEvent, submitAcceptText, submitCancelText, placeholderText, defaultTodoText }) {

    const {
        stateUpdaters
      } = useTodos();
    
      const { contTodo, delTodo } = stateUpdaters;

    const [newTodoValue, setNewTodoValue] = React.useState(defaultTodoText || '');

    const navigate = useNavigate();

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    const onSubmit = (event) => {
        const error = document.querySelector('.error');
        event.preventDefault();


        if(newTodoValue.length <= 0) {
            return error.innerText =`${language === 'spanish' ? '¡No puedes añadir una tarea vacia!' : "You can not add an empty task!"}`;
        } 
        
        if(newTodoValue.length >= 255) {
            return error.innerText =`${language === 'spanish' ? '¡La tarea es demasiado larga!' : "The task is too long!"}`;
        }

        if(delTodo(newTodoValue) === true){
            return error.innerText =`${language === 'spanish' ? 'Tienes una tarea con este nombre en tu papelera' : "You have a task with this name in your recycle bin"}` 
        } else if(contTodo(newTodoValue) === true) {
            return error.innerText =`${language === 'spanish' ? '¡Ya tienes una tarea con este nombre!' : "You already have a task with this name!"}`;
        } else {
            submitEvent(newTodoValue);
            navigate('/tasks/');
        }
        
    }

    const onCancel = () => {
        navigate('/tasks/');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{label}</label>
            <p className="error"></p>
            <textarea
                value = {newTodoValue} 
                onChange={onChange}
                placeholder={placeholderText}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="TodoForm-button TodoForm-button--add"
                >
                {submitAcceptText}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                {submitCancelText}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };