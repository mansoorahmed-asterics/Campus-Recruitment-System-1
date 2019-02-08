import React, { Component, Fragment } from 'react';
import Input from '../../../UIComponents/Input';
import Button from '../../../UIComponents/Button';
import { Validation, RemoveErrorMessages } from "../../../Store/Actions/StudentsAction"
import { connect } from "react-redux";
class Info extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                {this.props.currentUser ? (<div>
                    <div className="container">
                        <div className="row">
                            <div className="col l8 s12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-title">
                                            Company Registration Form
                                        </div>
                                        <form>
                                        <Input t="text" l="Comapny Name" id="cname" f="cname"/>
                                        
                                        <div>
                                            <Button cn="btn-small  orange darken-1" t="Register"/>
                                        </div>
                                        </form>
                                    </div>
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