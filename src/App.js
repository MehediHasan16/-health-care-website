
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>

          </Route>
          <Route exact path='/home'>
            <Home></Home>

          </Route>
          <Route exact path='/login'>

            <Login></Login>
          </Route>
          <Route exact path='/register'>

            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
