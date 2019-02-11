import React,{Fragment} from 'react'
import { connect } from "react-redux"
import DefaultPic from '../../../defaultPic.jpg';

const SDetails = (props) => {
    const goBack = () => {
    props.history.push("/Students")
    }
    const { student } = props
    return (
        <div className="container">
            <br />
            {props.currentUser ? (
                props.student ? (
                <Fragment>
                    <div className="grey-text underline form_a" onClick={goBack}> &nbsp;  
                    <i className="material-icons">arrow_back</i></div>
                <div className="row">
                    <div className="col s12 m6 l6 offset-l3">
                        <div className="card">
                        <div className="card-image">
                                <img src={DefaultPic} alt="user-profile" className="pImage" />
                            </div>
                            <div className="card-content">
                                <div className="card-title red-text">
                                STUDENT DETAILS
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>First Name:</th>
                                            <td>{student.firstName}</td>
                                        </tr>
                                        <tr>
                                            <th>Sir Name:</th>
                                            <td>{student.lastName}</td>
                                        </tr>
                                        <tr>
                                            <th>Age: </th>
                                            <td>{student.age} </td>
                                        </tr>
                                        <tr>
                                            <th>Gender: </th>
                                            <td>{student.gender}</td>
                                        </tr>
                                        <tr>
                                            <th>Department: </th>
                                            <td>{student.dep}</td>
                                        </tr>
                                        <tr>
                                            <th>Qualification: </th>
                                            <td>{student.qua}</td>
                                        </tr>
                                        <tr>
                                            <th>Skills: </th>
                                            <td>{student.skills}</td>
                                        </tr>
                                        <tr>
                                            <th>Email: </th>
                                            <td>{student.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Contact Number: </th>
                                            <td>{student.phoneNumber}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </Fragment>) : (<div className="center grey-text lighten-3">Loading. . . . </div>)
            ) : (null)}
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const specific = state.student.allStudents.find((student) => {
        return student.id === id
    })
    return {
        student: specific,
        currentUser: state.auth.currentUser,
    }
}
export default connect(mapStateToProps)(SDetails)
