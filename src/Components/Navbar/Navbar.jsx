import React, { Component, Fragment } from 'react'
import SignInLinks from "./SignInLinks"
import { NavLink } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import './Navbar.css'
import { connect } from "react-redux"
import { CURRENTUSER } from '../../Store/Actions/authActions';
import { PervDataOfStudents } from '../../Store/Actions/StudentsAction';
class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      left: false,
    }
  }
  componentDidMount = () => {
    this.props.currentUser()
    this.props.pervDataofStudents()
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
          <li className="collection-item">
            <NavLink to="/" exact className="orange-text">
              Students
            </NavLink>
          </li>
          <li className="collection-item">
            <NavLink to="/" exact className="orange-text">
              Company
            </NavLink>
          </li>
          <li className="collection-item">
            <NavLink to="/Profile" className="orange-text">
              Profile
            </NavLink>
          </li>
          <li className="collection-item">
            <NavLink to='/SignOut' exact className="orange-text">
              Sign out
      </NavLink>
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
        <span className="flow-text orange darken-3 hide-on-large-only">Campus Recruitment System</span>
            <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div onClick={this.toggleDrawer(false)}>
                {sideList}
              </div>
            </Drawer>
            <span className="brand-logo hide-on-med-and-down">Campus Recruitment System</span>
            <ul className="right hide-on-med-and-down">
              <SignInLinks s={this.props.status} email={this.props.User.email} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(CURRENTUSER()),
    pervDataofStudents: () => dispatch(PervDataOfStudents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)