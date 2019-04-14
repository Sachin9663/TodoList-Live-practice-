import React, { Component } from 'react';
import Login from "./Component/Login/login.js";
import Main from "./Component/Todo/Main/Main";

import {
  BrowserRouter as Router,
  Route,
  Link, Redirect
} from 'react-router-dom';
import Header from "./Component/Header/header";

class App extends Component {
    state = {isAuth: false}

    isAuthenticated = (isAuth) => {
        this.setState({
            isAuth: isAuth
        })
    }
  render() {
    return (
        <div className="App">
            <Header/>
              <Router>
                  <Route exact path={"/"}
                         render={(props) => <Login {...props}
                                 loginCallback={this.isAuthenticated}
                                 isAuth={this.state.isAuth}
                         />}
                  />
                  <PrivateRoute path={'/login'} component={Login} isAuth={this.state.isAuth}/>
                  <PrivateRoute path={'/todoList'} component={Main} isAuth={this.state.isAuth}/>
              </Router>
          </div>


    );
  }
}

export default App;

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {
    if (isAuth === true) {
        return <Route {...rest} render={(props) => <Component {...props}/>}/>
    } else {
        console.log("Invalid login");
        return <Route {...rest} render={(props) => <Redirect {...props} to={'/'}/>
        }/>
    }
}
