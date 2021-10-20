
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
import Error from './components/Error/Error';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import AuthProvider from './Context/AuthProvider';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
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
            <PrivateRouter path='/serviceDetail/:serviceId'>

              <ServiceDetail></ServiceDetail>
            </PrivateRouter>
            <Route path='*'>
              <Error></Error>

            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
