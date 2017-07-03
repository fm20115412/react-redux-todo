/**
 * Created by fm_babybear on 2017/6/21.
 */
import {SET_FILTER} from './actionTypes'

export const setFilter=filterType=>({
    type:SET_FILTER,
    filter:filterType
})