/**
 * Created by fm_babybear on 2017/6/21.
 */
import {SET_FILTER} from './actionTypes'
import {FilterTypes} from '../constants'

export default (state=FilterTypes.ALL,action)=>{
    switch (action.type){
        case SET_FILTER:{
            return action.filter
        }
        default:{
            return state
        }

    }
}