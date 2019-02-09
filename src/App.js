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
class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount = () => {
    this.props.currentUser()
  }
  render() {
    return (
      <div className="App">
        {this.props.User ? (<Router>
          <Fragment>
            <Navbar />
            <Switch>
                  <Route path="/Registration" component={Registration}/> 
                  <Route path="/companyInfo" component={Info}/> 
                  <Route path="/Posting" component={Posting}/> 
                  <Route path="/Profile" component={Profile}/> 
                  <Route path="/SignOut" component={SignOut}/>
            </Switch>
          </Fragment>
        </Router>) : (
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
  return {
    User: user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(CURRENTUSER()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
