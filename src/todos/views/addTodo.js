/**
 * Created by fm_babybear on 2017/6/21.
 */
import  React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo} from '../action'

class AddTodo extends Component{
    constructor(props,context){
        super(props,context)
        this.onSubmit=this.onSubmit.bind(this)
        this.inputChange=this.inputChange.bind(this)
        this.state={
            value:""
        }
    }
    onSubmit(event){
        event.preventDefault()
        if(!this.state.value.trim()){
            return;
        }
        this.props.onAdd(this.state.value)
        this.setState({value:''})
    }
    inputChange(event){
        this.setState({
            value:event.target.value
        })

    }
    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.inputChange} value={this.state.value}/>
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        )
    }
}
AddTodo.propTypes={
    onAdd:PropTypes.func.isRequired
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onAdd:(text)=>{
            dispatch(addTodo(text))
        }
    }
}
export default connect(null,mapDispatchToProps)(AddTodo)