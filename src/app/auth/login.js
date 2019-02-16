import React ,{Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    changeText = (ev) => {
        ev.preventDefault();
        this.setState({[ev.target.name]:ev.target.value})
    }

    submit = (ev) =>{
    ev.preventDefault();
    console.log(this.state)
    }
    render(){
        return(
            <div>
            <form onSubmit={this.submit}>
                <input onChange={this.changeText} name="email" placeholder="email"/>
                <input onChange={this.changeText} name="password"  type="password" placeholder="password"/>
                <button onClick={this.submit}>
                Submit
                </button>
            </form>
            </div>
        )
    }
}
export default Login