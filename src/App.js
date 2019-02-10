import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import DashBoard from './Components/Dashboard/DashBoard';
import SignUP_IN from './Components/Auth/SignUP_IN';
import {connect} from "react-redux";
import { CURRENTUSER } from './Store/Actions/authActions';
import "./App.css";
import SignOut from './Components/Auth/SignOut';
import Registration from './Components/Dashboard/Student/Registration';
import Info from './Components/Dashboard/Company/Info';
import PostVacancy from './Components/Dashboard/Company/PostVacancy';
import Profile from './Components/Dashboard/UserProfile/Profile';
import {PervDataOfStudents} from "./Store/Actions/StudentsAction";
import Students from './Components/Dashboard/Student/Students';
import Companies from './Components/Dashboard/Company/Companies';
import SDetails from "./Components/Dashboard/Student/SDetails";
import CDetails from "./Components/Dashboard/Company/CDetails";
import { PervDataOfCompanies } from './Store/Actions/CompanyActions';
import { PervDataOfVacancies } from './Store/Actions/VacancyActions';
class App extends Component {
  componentDidMount = () => {
    this.props.currentUser();
    this.props.pervDataOfStudents();
    this.props.pervDataOfCompanies();
    this.props.pervDataOfVacancies();
  }
  render() {
    return (
      <div className="App">
        {this.props.User ? (this.props.Status === "Admin" ? (<Router>
          <Fragment>
            <Navbar />
            <Switch>
                  <Route path="/Students" component={Students} />
                  <Route path="/Companies" component={Companies} />
                  <Route path="/SDetails:id" component={SDetails} />
                  <Route path="/CDetails:id" component={CDetails} />
                  <Route path="/SignOut" component={SignOut}/>
            </Switch>
          </Fragment>
        </Router>): (this.props.Status === "Student" ? (this.props.regS ? (<Router>
          <Fragment>
            <Navbar />
            <Switch>
                  <Route path="/Companies" component={Companies} />
                  <Route path="/CDetails:id" component={CDetails} />
                  <Route path="/Registration" component={Registration}/> 
                  <Route path="/Profile" component={Profile}/> 
                  <Route path="/SignOut" component={SignOut}/>
            </Switch>
          </Fragment>
        </Router>): (<Registration />)) : (this.props.regC ? (<Router>
          <Fragment>
            <Navbar />
            <Switch>
                  <Route path="/Students" component={Students} />
                  <Route path="/SDetails:id" component={SDetails} />
                  <Route path="/CompanyInfo" component={Info}/>
                  <Route path="/PostVacancy" component={PostVacancy} />
                  <Route path="/Profile" component={Profile}/> 
                  <Route path="/SignOut" component={SignOut}/>
            </Switch>
          </Fragment>
        </Router>) : (<Info />)))) : (
            <Router>
              <Fragment>
                  <Route exact path="/" component={DashBoard} />
                  <Route exact path="/SignUp" component={SignUP_IN}/>
              </Fragment>
            </Router>)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  const user = state.auth.currentUser ? state.auth.currentUser : null
  const status = state.auth.currentUser ? state.auth.status : null
  const regS = state.auth.currentUser ? state.student.allStudents.find(v => v.userId === user.uid) : null
  const regC = state.auth.currentUser ? state.company.allCompanies.find(v => v.userId === user.uid) : null
  console.log("Students",state.student.allStudents);
  console.log("Companies",state.company.allCompanies);
  console.log("Vacancies",state.vacancy.allVacancies); 
  return {
    User: user,
    Status: status,
    regS:regS, 
    regC:regC,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(CURRENTUSER()),
    pervDataOfStudents: () => dispatch(PervDataOfStudents()),
    pervDataOfCompanies: () => dispatch(PervDataOfCompanies()),
    pervDataOfVacancies: () => dispatch(PervDataOfVacancies()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
