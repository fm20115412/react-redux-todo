/**
 * Created by fm_babybear on 2017/7/3.
 */
import React from 'react'
import {showSignUp,showSignIn,closeDialog} from '../actions'
import {connect} from 'react-redux';
import {DialogStatus} from "../../constants"
import MyDialog from './myDialog'
import './style.css'


const topmenu=({currentStatus,signUp,signIn})=>{
    let dialog=null;
    if(currentStatus===DialogStatus.SIGNUP){
        dialog = <MyDialog title={currentStatus} />
    }
    if(currentStatus===DialogStatus.SIGNIN){
        dialog = <MyDialog title={currentStatus} />
    }
    console.log('dialog',dialog)
    return (
        <div className="topbar">
            <div className="wrapper">
                <a href="#" className="button primary" onClick={signUp}>注册</a>
                <a href="#" className="button" onClick={signIn}>登录</a>
            </div>
            {dialog}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        currentStatus:state.topbar
    }
}
const mapDispatchToProps = (dispatch)=>({
    signUp:()=>{
        dispatch(showSignUp())
    },
    signIn:()=>{
        dispatch(showSignIn())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(topmenu);