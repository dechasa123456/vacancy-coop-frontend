import React, { Component,Suspense,lazy } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
const Footer=lazy(()=>import ('./Containers/Footer'));
// import './App.css';
const Header=lazy(()=>import('./Containers/Header'));
const Home=lazy(()=>import('./Components/Home'));
const Login=lazy(()=>import('./Components/Login'));
const Signup=lazy(()=>import('./Components/Signup'));
const Help=lazy(()=>import('./Components/Help'));
const DetailVacancy=lazy(()=>import('./Components/DetailVacancy'));
const FirstSignup=lazy(()=>import('./Components/FirstSignup'));
const AppliedStatus=lazy(()=>import('./Containers/AppliedStatus'));
class APP extends Component {
  render() { 
    return (
       <Suspense fallback={<div>Loading...</div>}>
        <Router>
         <Header/>
         <Switch>
           <Route exact path="/"><Home /></Route>
           <Route exact path="/help" ><Help/></Route>
           <Route exact path="/login"><Login/></Route>
           <Route exact path="/signup"><FirstSignup/></Route>
           <Route exact path="/profile"><Signup/></Route>
           <Route exact path="/detailVacancy/:id"  component={DetailVacancy} />
           <Route exact path="/my_vacancy_status" ><AppliedStatus /></Route>
            </Switch>
          </Router>
        <Footer/>
      </Suspense>
    )
  }
}
 
export default APP;
