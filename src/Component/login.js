import React,{Component} from "react";
import "./login.css";
import Auth from "./auth.json";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Action from "./action";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:"",
            isAuth:this.props.isAuth
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault();
        let{username,password}=this.state;
        let flag=0;
        for(let i=0; i<Auth.auth.length; i++){
            if(Auth.auth[i][username] === password) {
                this.setState({
                    isAuth: true
                }, this.props.loginCallback(true));
                this.props.history.push('/todoList'); //check this.props
                flag = 1;
                break;
            }
        }
        if(!flag) {
            alert('Invalid Login');
            this.setState({
                username: '',
                password: ''
            })
        }


    }
    render() {
        return(
            <Router>
                <div className="Content">
                    <div className='container'>
                        <h2>Login Here</h2>
                        <form method="POST" onSubmit={this.handleSubmit}>
                            <input type="text"
                                   placeholder="Username"
                                   onChange={this.handleChange}
                                   value={this.state.username}
                                   name='username'
                            />

                            <input type="password"
                                   placeholder="Password"
                                   onChange={this.handleChange}
                                   value={this.state.password}
                                   name='password'
                            />
                            <input type='submit'
                                    value='login'
                            />
                        </form>
                    </div>
                </div>
            </Router>

        )
    }
}

export default Login;