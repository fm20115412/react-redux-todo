/**
 * Created by fm_babybear on 2017/7/3.
 */
import React from 'react'
const SignUp=()=>{
    return (
        <form className="singnUp">
            <div className="row">
                <label htmlFor="email">邮箱：</label>
                <input type="text" id="email"/>
            </div>
            <div className="row">
                <label htmlFor="username">用户名：</label>
                <input type="text" id="username"/>
            </div>
            <div className="row">
                <label htmlFor="password">密码：</label>
                <input type="password" id="password"/>
            </div>
            <div className="row">
                <button type="submit">注册</button>
            </div>
        </form>
    )
}
export default SignUp