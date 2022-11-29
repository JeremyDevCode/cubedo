import React from 'react'
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function NewTodoPage() {

  const {
    state,
    stateUpdaters
  } = useTodos();

  const { language } = state;
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label={language === 'spanish' ? "Escribe una nueva tarea" : "Write a new task"}
      placeholderText={language === 'spanish' ? "Lavar los platos" : "Do the washing up"}
      submitAcceptText={language === 'spanish' ? "Añadir" : "Add"}
      submitCancelText={language === 'spanish' ? "Cancelar" : "Cancel"}
      submitEvent={(text) => addTodo(text)}
    />
  )
}

export { NewTodoPage };