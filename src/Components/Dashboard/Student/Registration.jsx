import React, { Component, Fragment } from 'react';
import Input from '../../../UIComponents/Input';
import Button from '../../../UIComponents/Button';
import Department from "../../../UIComponents/Department"
import { connect } from "react-redux"
import { addNewStudent, UpdateCurrentStudent, Validation, RemoveErrorMessages } from "../../../Store/Actions/StudentsAction"
class Registration extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            LName: "",
            Age: '',
            Gender: '',
            Phone: "",
            Email: "",
            Qualification: "",
            Skills: '',
            Department: "",
            edit: false,
            editID: "",
        }
    }
    componentDidMount() {
        if (this.props.currentUser) {
            const userID = this.props.currentUser.uid
            if (this.props.allStudents) {
                let allStudents = this.props.allStudents
                let specific = allStudents.find((stu) => {
                    return stu.userId === userID
                })
                if (specific) {
                    this.setState({
                        Name: specific.firstName,
                        LName: specific.lastName,
                        Age: specific.age,
                        Gender: specific.gender,
                        Phone: specific.phoneNumber,
                        Email: specific.email,
                        Skills: specific.skills,
                        Department: specific.dep,
                        Qualification: specific.qua,
                        edit: true,
                        editID: specific.id,
                    })
                }
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser) {
            const userID = nextProps.currentUser.uid
            if (nextProps.allStudents) {
                let allStudents = nextProps.allStudents
                let specific = allStudents.find((stu) => {
                    return stu.userId === userID
                })
                if (specific) {
                    this.setState({
                        Name: specific.firstName,
                        LName: specific.lastName,
                        Age: specific.age,
                        Gender: specific.gender,
                        Phone: specific.phoneNumber,
                        Email: specific.email,
                        Department: specific.dep,
                        Qualification: specific.qua,
                        Skills: specific.skills,
                        edit: true,
                        editID: specific.id,
                    })
                }
            }
        }
    }
    onAdd = (event) => {
        event.preventDefault();
        const { Name,
            LName,
            Age,
            Gender,
            Phone,
            Email,
            Qualification, Skills, Department } = this.state;
        if (Name === "" &&
            LName === "" &&
            Age === "" &&
            Gender === "" &&
            Phone === "" &&
            Email === "" &&
            Qualification === "" && Skills === "" && Department === "") {
            this.props.valide("Please fill this form properly.")
            return;
        }
        else if (Name === '') {
            this.props.valide("Please enter your name.")
            return;
        }
        else if (LName === "") {
            this.props.valide("Please enter your sir name.")
            return;
        }
        else if (Age === '') {
            this.props.valide("Please enter your age.")
            return;
        }
        else if (Age <= 15) {
            this.props.valide("You are not eligible for jobs.")
            return;
        }
        else if (Gender === '') {
            this.props.valide("Please enter your gender.")
            return;
        }
        else if (Qualification === "") {
            this.props.valide("Please enter your qualification.")
            return;
        }
        else if (Department === "") {
            this.props.valide("Please select your department.")
            return;
        }
        else if (Skills === "") {
            this.props.valide("Please enter your skills.")
            return;
        }
        else if (Email === "") {
            this.props.valide("Please enter your valide email address.")
            return;
        }
        else if (Email.indexOf("@") === -1 || Email.indexOf(".com") === -1 ||
            Email.indexOf(" ") !== -1) {
            this.props.valide("Please enter your valid email address.")
            return;
        }
        else if (Phone === "") {
            this.props.valide("Please enter your phone number.")
            return;
        }
        else if (Phone.indexOf(" ") !== -1 || Phone.indexOf("-") !== -1 ||
            Phone.length < 11 || Phone.length > 11) {
            this.props.valide("Please enter your 11 digit phone number.")
            return;
        }
        else if (this.state.edit) {
            this.props.editStudent({
                userId: this.props.currentUser.uid,
                firstName: Name, lastName: LName,
                age: Age,
                skills: Skills,
                gender: Gender, phoneNumber: Phone,
                email: Email, qua: Qualification,
                dep: Department,
            }, this.state.editID)
        }
        else {
            this.props.newStudent({
                userId: this.props.currentUser.uid,
                firstName: Name, lastName: LName, age: Age,
                gender: Gender, phoneNumber: Phone,
                email: Email, qua: Qualification,
                dep: Department,
                skills: Skills,
            })
        }
    }

    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        this.props.error();
    }
    render() {
        return (
            <Fragment>
                {this.props.currentUser ? (
                    <Fragment>
                        {this.state.edit ? (null) : (<nav className="nav-wrapper orange darken-4">
                            <div className="container">
                                <span className="brand-logo hide-on-small-only">Campus Recruitment System</span>
                                <span className="hide-on-med-and-up">Campus Recruitment System</span>
                            </div>
                        </nav>)}
                    <div className="container">
                        <br />
                        <div className="row">
                            <div className="orange  col l12 s12 darken-1 white-text center flow-text">
                                Student Registration Form
                            </div>
                            {this.props.errFlag ? (
                                <div className="col l12 s12 center grey lighten-3 red-text">
                                    <h6>{this.props.errmess}
                                    </h6>
                                </div>
                            ) : (null)}
                            <form onSubmit={this.onAdd}>
                                <div className="orange col l12 s12 lighten-5">
                                    <br />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Name} oc={this.whenChange} t="text" f='name' d='name' l='First Name' n="Name" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.LName} oc={this.whenChange} t="text" f='lname' d='lname' l='Sir Name' n="LName" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Age} oc={this.whenChange} t="number" f='age' d='age' l='Age' n="Age" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Gender} oc={this.whenChange} t="text" f='gender' d='gender' l='Gender' n="Gender" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Qualification} oc={this.whenChange} t="text" f='qua' d='qua' l='Qualification' n="Qualification" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Skills} oc={this.whenChange} t="text" f='skills' d='skills' l='Skills' n="Skills" />
                                </div>
                                <div className="orange col l12 s12 lighten-5">
                                    <Department v={this.state.Department} oc={this.whenChange} text="Department" id="dep-simple" f="dep-simple" n="Department" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Email} oc={this.whenChange} t="email" f='email' d='email' l='Email' n="Email" />
                                </div>
                                <div className="orange col l6 s12 lighten-5">
                                    <Input v={this.state.Phone} oc={this.whenChange} t="number" f="phn" d="phn" l="Conatct Number" n="Phone" />
                                </div>
                                <div className="col l12 s12">
                                    &nbsp;
                                </div>
                                <div className="col s4 l2 offset-s4 offset-l5 ">
                                    {this.state.edit ? (
                                        <Button cn="btn-large  orange darken-1" t="Update" />
                                    ) : (
                                            <Button cn="btn-large  orange darken-1" t="Register" />)}
                                </div>
                                <br />
                                <br />
                            </form>
                        </div>
                    </div>
                    </Fragment>
                ) : (null)}
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newStudent: (obj) => dispatch(addNewStudent(obj)),
        editStudent: (obj, editID) => dispatch(UpdateCurrentStudent(obj, editID)),
        valide: (message) => dispatch(Validation(message)),
        error: () => dispatch(RemoveErrorMessages()),
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        errmess: state.student.vErrorMessage,
        errFlag: state.student.vErrorFlag,
        allStudents: state.student.allStudents,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);