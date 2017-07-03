/**
 * Created by fm_babybear on 2017/7/3.
 */
import {SHOW_SIGNUP,SHOW_SIGNIN,CLOSE_DIALOG} from './actionTypes'
import {DialogStatus} from "../constants"
export default (state=DialogStatus.CLOSE,action)=>{
    switch (action.type){
        case SHOW_SIGNUP:{
            return DialogStatus.SIGNUP
        }
        case SHOW_SIGNIN:{
            return DialogStatus.SIGNIN
        }
        case CLOSE_DIALOG:{
            return DialogStatus.CLOSE
        }
        default:{
            return state
        }
    }
}