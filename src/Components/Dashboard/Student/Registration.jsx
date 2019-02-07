import React, { Component, Fragment } from 'react';
import Input from '../../../UIComponents/Input';
import Button from '../../../UIComponents/Button';
import { connect } from "react-redux"
import { addNewDonor, UpdateCurrentDonor, Validation, RemoveErrorMessages } from "../../../store/Actions/donorsAction"
import Avail from '../../../UIComponents/Avail';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            DName: "",
            DLName: "",
            DAge: '',
            DGender: '',
            DPhone: "",
            DEmail: "",
            DCity: "",
            DCountry: "",
            edit: false,
            editID: "",
            checkedA: true,
        }
    }
    /* componentDidMount() {
        if (this.props.currentUser) {
            const userID = this.props.currentUser.uid
            if (this.props.allDonors) {
                let allDonors = this.props.allDonors
                let specific = allDonors.find((donor) => {
                    return donor.userId === userID
                })
                if (specific) {
                    this.setState({
                        DName: specific.firstName,
                        DLName: specific.lastName,
                        DAge: specific.age,
                        DGender: specific.gender,
                        DPhone: specific.phoneNumber,
                        DEmail: specific.email,
                        DCity: specific.city,
                        DCountry: specific.country,
                        edit: true,
                        editID: specific.id,
                        checkedA: specific.avail
                    })
                }
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser) {
            const userID = nextProps.currentUser.uid
            if (nextProps.allDonors) {
                let allDonors = nextProps.allDonors
                let specific = allDonors.find((donor) => {
                    return donor.userId === userID
                })
                if (specific) {
                    this.setState({
                        DName: specific.firstName,
                        DLName: specific.lastName,
                        DAge: specific.age,
                        DGender: specific.gender,
                        DPhone: specific.phoneNumber,
                        DEmail: specific.email,
                        DCity: specific.city,
                        DCountry: specific.country,
                        edit: true,
                        editID: specific.id,
                        checkedA: specific.avail
                    })
                }
            }
        }
    } */
    onAdd = (event) => {
        event.preventDefault();
        const { DName,
            DLName,
            DAge,
            DGender,
            DPhone,
            DEmail,
            DCity,
            DCountry, } = this.state;
        if (DName === "" &&
            DLName === "" &&
            DAge === "" &&
            DGender === "" &&
            DPhone === "" &&
            DEmail === "" &&
            DCity === "" &&
            DCountry === "") {
            this.props.valide("Please fill this form properly.")
            return;
        }
        else if (DName === '') {
            this.props.valide("Please enter your name.")
            return;
        }
        else if (DLName === "") {
            this.props.valide("Please enter your sir name.")
            return;
        }
        else if (DAge === '') {
            this.props.valide("Please enter your age.")
            return;
        }
        else if (DAge <= 15){
            this.props.valide("You are not eligible for jobs.")
            return;
        }
        else if (DGender === '') {
            this.props.valide("Please enter your gender.")
            return;
        }
        else if (DCity === "") {
            this.props.valide("Please enter your city.")
            return;
        }
        else if (DCountry === "") {
            this.props.valide("Please enter your country.")
            return;
        }
        else if (DEmail === "") {
            this.props.valide("Please enter your valide email address.")
            return;
        }
        else if (DEmail.indexOf("@") === -1 || DEmail.indexOf(".com") === -1 ||
        DEmail.indexOf(" ") !== -1) {
            this.props.valide("Please enter your valid email address.")
            return;
        }
        else if (DPhone === "") {
            this.props.valide("Please enter your phone number.")
            return;
        }
        else if (DPhone.indexOf(" ") !== -1 || DPhone.indexOf("-") !== -1 ||
        DPhone.length < 11 || DPhone.length > 11){
            this.props.valide("Please enter your 11 digit phone number.")
            return;
        }
        else if (this.state.edit) {
            this.props.editDonor({
                userId: this.props.currentUser.uid,
                firstName: DName, lastName: DLName,
                age: DAge,
                gender: DGender, phoneNumber: DPhone,
                email: DEmail, city: DCity, country: DCountry,
                avail: this.state.checkedA,
            }, this.state.editID)
        }
        else {
            this.props.newDonor({
                userId: this.props.currentUser.uid,
                firstName: DName, lastName: DLName, age: DAge,
                gender: DGender, phoneNumber: DPhone,
                email: DEmail, city: DCity, country: DCountry,
                avail: this.state.checkedA,
            })
        }
        this.props.history.push('/');
    }

    whenChange = (event) => {
        const { name, value, checked } = event.target;
        if (name === "checkedA") {
            this.setState({ [name]: checked })
        }
        else {
            this.setState({ [name]: value })
        }
        this.props.error();
    }
    render() {
        return (
            <Fragment>
                {this.props.currentUser ? (
                    <div className="container">
                        <br />
                        <div className="row">
                            <div className="orange  col l12 s12 darken-1 white-text center flow-text">
                                Registration Form
                            </div>
                            {this.props.errFlag ? (
                                <div className="col l12 s12 center grey darken-1 white-text">
                                    <h6>{this.props.errmess}
                                    </h6>
                                </div>
                            ) : (null)}
                            <form onSubmit={this.onAdd}>
                                <div className="orange col l12 s12 lighten-5">
                                    <br />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DName} oc={this.whenChange} t="text" f='name' d='name' l='First Name' n="DName" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DLName} oc={this.whenChange} t="text" f='lname' d='lname' l='Sir Name' n="DLName" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DAge} oc={this.whenChange} t="number" f='age' d='age' l='Age' n="DAge" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DGender} oc={this.whenChange} t="text" f='gender' d='gender' l='Gender' n="DGender" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DCity} oc={this.whenChange} t="text" f='city' d='city' l='City' n="DCity" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DCountry} oc={this.whenChange} t="text" f='country' d='country' l='Country' n="DCountry" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DEmail} oc={this.whenChange} t="email" f='email' d='email' l='Email' n="DEmail" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.DPhone} oc={this.whenChange} t="number" f="phn" d="phn" l="Phone Number" n="DPhone" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Avail name="checkedA" checked={this.state.checkedA} oc={this.whenChange} />
                                </div>
                                <div className="col s4 l2 offset-s4 offset-l5 ">
                                    {this.state.edit ? (
                                        <Button cn="btn  orange darken-1" t="Update" />
                                    ) : (
                                            <Button cn="btn  orange darken-1" t="Register" />)}
                                </div>
                                <br />
                                <br />
                            </form>
                        </div>
                    </div>
                ) : (null)}
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newDonor: (obj) => dispatch(addNewDonor(obj)),
        editDonor: (obj, editID) => dispatch(UpdateCurrentDonor(obj, editID)),
        valide: (message) => dispatch(Validation(message)),
        error: () => dispatch(RemoveErrorMessages()),
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        errmess: state.donor.vErrorMessage,
        errFlag: state.donor.vErrorFlag,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);