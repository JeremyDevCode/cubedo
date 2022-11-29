import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function EditTodoPage() {

  const location = useLocation();

  const params = useParams();

  const id = Number(params.id);

  const {
    state,
    stateUpdaters
  } = useTodos();

  const { loading, language, getTodo } = state;
  const { editTodo } = stateUpdaters;

  let todoText; 

  if(location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  } 

  return (
    <TodoForm
      label={language === 'spanish' ? "Edita tu tarea" : "Edit your task"}
      defaultTodoText={todoText}
      submitAcceptText={language === 'spanish' ? "Guardar" : "Save"}
      submitCancelText={language === 'spanish' ? "Cancelar" : "Cancel"}
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )

}

export { EditTodoPage };