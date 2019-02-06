import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import DashBoard from './Components/Dashboard/DashBoard';
import SignUP_IN from './Components/Auth/SignUP_IN';
class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div className="App">
        {this.props.show ? (<Router>
          <Fragment>
            <Navbar />
            <Switch>
              {/* <Route path="" component={}/>
                  <Route path="" component={}/> */}
            </Switch>
          </Fragment>
        </Router>) : (
            <Router>
              <Fragment>
                <DashBoard />
                <Switch>
                  <Route exact path="StudentSignUp" component={SignUP_IN}/>
                  <Route exact path="CompanySignUp" component={SignUP_IN}/>
                  <Route exact path="AdminSignUp" component={SignUP_IN}/>
                </Switch>
              </Fragment>
            </Router>)}
      </div>
    );
  }
}

export default App;
