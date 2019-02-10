import React, { Component, Fragment } from 'react'
import SignInLinks from "./SignInLinks"
import { NavLink } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import './Navbar.css'
import { connect } from "react-redux"
class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      left: false,
    }
  }
  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    const sideList = (
      <div className="list_width">
        <ul className="collection with-header">
          <li className="collection-header orange darken-3">
            <h6 className="white-text">
              {this.props.User ? (this.props.User.email) : (null)}
            </h6>
          </li>
          {this.props.status === "Company" || this.props.status === "Admin" ? (<li className="collection-item">
            <NavLink to="/Students" className="orange-text">Students</NavLink>
          </li>) : (null)}
          {this.props.status === "Student" || this.props.status === "Admin" ? (<li className="collection-item">
            <NavLink to="/Companies" className="orange-text">Companies</NavLink>
          </li>) : (null)}
          {this.props.status === "Company" ? (<li className="collection-item">
            <NavLink to="/PostVacancy" className="orange-text">Post New Vacancy</NavLink>
          </li>) : (null)}
          {this.props.status === "Company" || this.props.status === "Student" ? (<li className="collection-item">
            <NavLink to="/Profile" className="orange-text">Profile</NavLink>
          </li>) : (null)}
          <li className="collection-item">
            <NavLink to="/SignOut" className="orange-text">Sign Out</NavLink>
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        {this.props.User ? (<Fragment><nav className="nav-wrapper orange darken-4">
          <div className="container">
            <span onClick={this.toggleDrawer(true)} className="btn-small btn-floating transparent hide-on-large-only">
              <i className="material-icons">menu</i>
            </span>
            &nbsp;
            &nbsp;
            &nbsp;
        <span className="flow-text orange darken-4 hide-on-large-only">Campus Recruitment System</span>
            <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div onClick={this.toggleDrawer(false)}>
                {sideList}
              </div>
            </Drawer>
            <span className="brand-logo hide-on-med-and-down">Campus Recruitment System</span>
            <ul className="right hide-on-med-and-down">
              <SignInLinks email={this.props.User.email} />
            </ul>
          </div>
        </nav>
        </Fragment>) : (null)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const user = state.auth.currentUser ? state.auth.currentUser : null
  return {
    User: user,
    status: state.auth.status
  }
}
export default connect(mapStateToProps, null)(Navbar)