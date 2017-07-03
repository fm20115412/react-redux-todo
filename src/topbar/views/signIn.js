/**
 * Created by fm_babybear on 2017/7/3.
 */
import React from 'react'
const SignIn=()=>{
    return (
        <form className="signIn">
            <div className="row">
                <label htmlFor="username">用户名：</label>
                <input type="text" id="username"/>
            </div>
            <div className="row">
                <label htmlFor="password">密码：</label>
                <input type="password" id="password"/>
            </div>
            <div className="row">
                <button type="submit">登录</button>
            </div>
        </form>
    )
}
export default SignIn