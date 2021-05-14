import React from 'react';
import './App.css';

import Register from './Register';
import Login from './Login';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 
function App({navigation}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch> 
      </Router>
    </div>
   );
}

const Home = () => {
  return (
  <div>
    <h1>Home Page</h1>
    <a href="login">Login</a><br/>
    <a href="register">Register</a>
  </div>
  );
}

export default App;