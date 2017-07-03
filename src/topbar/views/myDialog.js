/**
 * Created by fm_babybear on 2017/7/3.
 */
import React from 'react'
import SignUp from './signUp'
import SignIn from './signIn'
import {DialogStatus} from '../../constants'
import {closeDialog} from '../actions'
import {connect} from 'react-redux';

const MyDialog=({title,close})=>{
    let main=null
    if(title===DialogStatus.SIGNUP){
        main=<SignUp />
    }else{
        main=<SignIn />
    }
    return (
        <div className="dialogWrapper">
            <div className="dialog">
                <header>
                    <span>{title}</span>
                    <span onClick={close}>X</span>
                </header>
                <hr/>
                <main>
                    {main}
                </main>
            </div>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
    return {
        title:ownProps.title
    }
}
const mapDispatchToProps=(dispatch)=>({
    close:()=>{
        dispatch(closeDialog())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MyDialog);