/**
 * Created by fm_babybear on 2017/6/21.
 */
import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes'
export default (state=[],action)=>{
    console.log('in todo reducer:',state)
    switch (action.type){
        case ADD_TODO:{
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        }
        case TOGGLE_TODO:{
            return state.map((todoItem)=>{
              if(todoItem.id===action.id){
                  return {...todoItem, completed: !todoItem.completed}
              } else{
                  return todoItem
              }
            })
        }
        case REMOVE_TODO:{
            return state.filter((todoItem)=>{
                return todoItem.id!==action.id
            })
        }
        default :{
            return state
        }
    }
}