import React, { Component } from 'react';
import Footer from './Containers/Footer';
import './App.css';
import Header from './Containers/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Help from './Components/Help';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import DetailVacancy from './Components/DetailVacancy';
import FirstSignup from './Components/FirstSignup';
import AppliedStatus from './Containers/AppliedStatus';
class APP extends Component {
  render() { 
    return (
      <React.Fragment>
       
       <Router>
       <Header/>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/help" component={Help}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/signup" component={FirstSignup}/>
           <Route exact path="/profile" component={Signup}/>
           <Route exact path="/detailVacancy/:id" component={DetailVacancy}/>
           <Route exact path="/my_vacancy_status" autoID="2" component={AppliedStatus}/>
            </Switch>
       </Router>
       <Footer/>
      </React.Fragment>
    )
  }
}
 
export default APP;
