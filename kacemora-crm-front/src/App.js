import React, { Component } from 'react';
import Login from './pages/Login.js';
import Index from './pages/Index.js';
import {
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  myCallback = dataFromChild => {
    this.setState({ isLogin: dataFromChild });
  };

  render() {
    if (this.state.isLogin) {
      return (
        <>
            <Switch>
              <Route>
                <Index isLogin={this.state.isLogin}/>
              </Route>
            </Switch>
        </>
      );
    } else {
      return (
        <>
            <Switch>
              <Route>
                <Login callbackFromParent={this.myCallback}/>
              </Route>
            </Switch>
        </>
      );
    }
  }
}

export default App;
