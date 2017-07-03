/**
 * Created by fm_babybear on 2017/6/21.
 */
import React from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'

import './style.css'
export default ()=>{
    return (
        <div className="todos">
            <AddTodo />
            <TodoList />
        </div>
    )
}
