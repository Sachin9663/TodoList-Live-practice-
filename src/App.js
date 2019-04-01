import React, { Component } from 'react';
import Login from "./Component/login.js";
import TodoList from "./Component/action.js";

import {
  BrowserRouter as Router,
  Route,
  Link,
    Redirect
} from 'react-router-dom';

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
              <Router>
                  <Route exact path={"/"}
                         render={(props) => <Login {...props}
                                 loginCallback={this.isAuthenticated}
                                 isAuth={this.state.isAuth}
                         />}
                  />
                  <PrivateRoute path={'/login'} component={Login} isAuth={this.state.isAuth}/>
                  <PrivateRoute path={'/todoList'} component={TodoList} isAuth={this.state.isAuth}/>
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
            // to={{pathname: '/', state: {error: {isError: true, message: 'login first'}}}}/>
        }/>
    }
}
