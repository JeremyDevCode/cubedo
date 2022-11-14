import React from 'react'
import './TodoList.css'

function TodoList(props) {

  return (
    <section className='TodoList-container'>
      

        <ul>
          {props.error && props.onError()}
          {props.loading && props.onLoading()}

          {(!props.error && !props.loading && !props.todosFiltered.length && !props.searchValue && props.del !== "delete" && (props.fil !== "complete") && (props.fil !== "uncomplete")) && props.onEmptyTodos()}

          {(!props.error && !props.loading && !props.todosFiltered.length && props.searchValue) && props.onEmptySearchResults()}

          {(!props.error && !props.loading && !props.totalDelete && !props.searchValue && props.del === "delete" && (props.fil !== "complete") && (props.fil !== "uncomplete")) && props.onEmptyDelete()}
          
          {(!props.error && !props.loading) && !props.todosFiltered.length && !props.searchValue && (props.fil === "complete" || props.fil === "uncomplete") && props.onEmptyFilter()}

          {!props.error && !props.loading && props.todosFiltered.map(props.render || props.children)}
        </ul>

    </section>
  )
}

export { TodoList};