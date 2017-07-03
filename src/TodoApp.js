/**
 * Created by fm_babybear on 2017/6/21.
 */
import React from 'react'
import {view as TopBar } from './topbar/'
import {view as Todos } from './todos/'
import {view as Filter} from './filter/'

function TodoApp() {
    return (
        <div>
            <TopBar />
            <Todos />
            <Filter />
        </div>
    )
}
export default TodoApp