/**
 * Created by fm_babybear on 2017/6/21.
 */
import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import {reducer as todoReducer} from './todos'
import {reducer as filterReducer} from './filter'
import {reducer as topbarReducer} from './topbar'

const reducer = combineReducers({
    todos:todoReducer,
    filter:filterReducer,
    topbar:topbarReducer
})
export default createStore(reducer,{});
