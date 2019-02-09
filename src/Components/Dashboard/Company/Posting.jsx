import React, { Component, Fragment } from 'react';
import Input from '../../../UIComponents/Input';
import Button from '../../../UIComponents/Button';
import { connect } from "react-redux";
class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Email: "",
            JobName: "", 
            JobDes: "",
            Salary: "",
            EC: "",
        };
    }
    onAdd = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                {this.props.currentUser ? (
                    <div className="container">
                        <br />
                        <div className="row">
                            <div className="orange  col l12 s12 darken-1 white-text center flow-text">
                                Post New Vacancy
                            </div>
                            <form onSubmit={this.onAdd}>
                                <div className="orange col l12 s12 lighten-5">
                                    <br />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.CID} oc={this.whenChange} t="text" f='cid' d='cid' l='Company ID' n="CID" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Email} oc={this.whenChange} t="email" f='email' d='email' l='Email' n="Email" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.JobName} oc={this.whenChange} t="text" f='jobName' d='jobName' l='Job Name' n="JobName" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.JobDes} oc={this.whenChange} t="text" f='jobDes' d='jobDes' l="Job description" n="jobDes" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Salary} oc={this.whenChange} t="number" f='salary' d='salary' l='Salary' n="Salary" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.EC} oc={this.whenChange} t="text" f='ec' d='ec' l='Eligibility Criteria' n="E" />
                                </div>
                                
                                <div className="col l12 s12">
                                    &nbsp;
                                </div>
                                <div className="col s4 l2 offset-s4 offset-l5 ">
                                    <Button cn="btn-large  orange darken-1" t="Post" />
                                </div>
                                <br />
                                <br />
                            </form>
                        </div>
                    </div>
                ) : (null)}
            </Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posting);