import React, { Component, Fragment } from 'react';
import Button from '../../../UIComponents/Button';
import { Validation, RemoveErrorMessages } from "../../../Store/Actions/StudentsAction"
import { connect } from "react-redux";
import InputS from '../../../UIComponents/InputS';
class Info extends Component {
    constructor() {
        super();
        this.state = {
            CompanyName: "",
            Established: "",
            HRName: "",
            Email: "",
            ContactNumber: "",
            CompanyID: "",
        };
    }
    whenChange = () => {

    }
    whenSubmit = () => {

    }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                {this.props.currentUser ? (<div>
                    <div className="container">
                        <div className="row">
                            <div className="col l8 s12 offset-l2">
                               <div className="card">
                               <form onSubmit={this.whenSubmit}>
                                    <div className="card-content">
                                        <div className="card-title orange-text text-darken-2 center">
                                            
                                            Company Registration Form  
                                            
                                        </div>
                                        <InputS t="text" l="Comapny Name" n="CompanyName" v={this.state.CompanyName} oc={this.whenChange} d="cname" f="cname"/>
                                        <InputS t="text" l="Established" n="Established" v={this.state.Established} oc={this.whenChange} d="es" f="es"/>
                                        <InputS t="text" l="HR Name" n="HRName" v={this.state.HRName} oc={this.whenChange} d="hrname" f="hrname"/>
                                        <InputS t="email" l="Email" n="Email" v={this.state.Email} oc={this.whenChange} d="email" f="email"/>
                                        <InputS t="number" l='Contact Number' n="ConatactNumber" v={this.state.ContactNumber}  oc={this.whenChange} d="cn" f="cn" />
                                        <InputS t="number" l="Company ID" n="CompanyID" v={this.state.CompanyID} oc={this.whenChange} d="cid" f="cid"/>
                                        <div className="card-action">
                                        <Button cn="btn-small  orange darken-1" t="Register"/>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (null)}
            </Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        valide: (message) => dispatch(Validation(message)),
        error: () => dispatch(RemoveErrorMessages()),
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        errmess: state.student.vErrorMessage,
        errFlag: state.student.vErrorFlag,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info);