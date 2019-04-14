import React,{Component} from "react";
import "./login.css";
import User from "../auth";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
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
        for(let i=0; i<User.list.length; i++){
            if(User.list[i][username] === password) {
                this.setState({
                    isAuth: true
                },
                this.props.loginCallback(true));
                this.props.history.push('/todoList');
                flag = 1;
                break;
            }
        }
        if(!flag) {
            alert('the Username or password incorrect');
            this.setState({
                username: '',
                password: ''
            })
        }


    }
    render() {
        return(
                <div className="Content2">
                    <div className='container2'>
                        <h2>Login Here</h2>
                        <form  onSubmit={this.handleSubmit}>
                            <input type="text"
                                   placeholder="Username(hint:user)"
                                   onChange={this.handleChange}
                                   value={this.state.username}
                                   name='username'
                                   autoComplete='off'
                            />

                            <input type="password"
                                   placeholder="Password(hint:password)"
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
        )
    }
}

export default Login;