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
import Posting from './Components/Dashboard/Company/Posting';
import Profile from './Components/Dashboard/UserProfile/Profile';
import {PervDataOfStudents} from "./Store/Actions/StudentsAction";
class App extends Component {
  componentDidMount = () => {
    this.props.currentUser()
    this.props.pervDataofStudents()
  }
  render() {
    return (
      <div className="App">
        {this.props.User ? (this.props.Status === "Admin" ? (<Router>
          <Fragment>
            <Navbar />
            <Switch>
                  <Route path="/Profile" component={Profile}/> 
                  <Route path="/SignOut" component={SignOut}/>
            </Switch>
          </Fragment>
        </Router>): (this.props.Status === "Student" ? (this.props.reg ? (<Router>
          <Fragment>
            <Navbar />
            <Switch>
                  <Route path="/Registration" component={Registration}/> 
                  <Route path="/Profile" component={Profile}/> 
                  <Route path="/SignOut" component={SignOut}/>
            </Switch>
          </Fragment>
        </Router>): (<Registration />)) : (null))) : (
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
  const reg = state.auth.currentUser ? state.student.allStudents.find(v => v.userId === user.uid) : null
  return {
    User: user,
    Status: status,
    reg:reg, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(CURRENTUSER()),
    pervDataofStudents: () => dispatch(PervDataOfStudents()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
