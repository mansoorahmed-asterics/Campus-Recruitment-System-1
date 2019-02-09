import React from 'react'
import { connect } from "react-redux";
import DefaultPic from '../../../defaultPic.jpg';
const Profile = (props) => {
    const currentStudent = props.allStudents.find(stu => {
        return stu.userId === props.user.uid
      })
    return (
        <div className="container">
            <br />
            <br />
            {props.user ? (props.status === "Student" ? (<div className="row">
                <div className="col s12 m8 l6 offset-l3 offset-m2">
                    <div className="card orange lighten-5">
                        <div className="card-image">
                            {props.UserProfilePictureFlag ? (<img src={props.UserProfilePictureURL} alt="user-profile" className="responsive-img" />
                            ) : (<img src={DefaultPic} alt="user-profile" className="pImage" />)}
                            <span className="card-title blue-text text-darken-3">Change Photo</span>
                            <span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => {}}><i className="material-icons">add</i></span>
                        </div>
                        <div className="card-content">
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="grey-text">First Name:</th>
                                        <td>{currentStudent.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Sir Name:</th>
                                        <td>{currentStudent.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Age:</th>
                                        <td>{currentStudent.age}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Gender:</th>
                                        <td>{currentStudent.gender}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Qualification:</th>
                                        <td>{currentStudent.qua}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Skills:</th>
                                        <td>{currentStudent.skills}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Department:</th>
                                        <td>{currentStudent.dep}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Email:</th>
                                        <td>{currentStudent.email}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Contact Number: </th>
                                        <td>{currentStudent.phoneNumber}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>) : (<div className="row">
                <div className="col l6 s12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title orange-text">
                                Company Details
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="grey-text">Comapny Name</th>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Established</th>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">HR Name</th>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Email</th>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Conatct Number</th>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Company ID</th>
                                        <td>{}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col l6 s12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title orange-text">
                                Postings
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="orange-text">
                                        Job Name
                                        </th>
                                        <th className="orange-text">
                                        Job description
                                        </th>
                                        <th className="orange-text">
                                        Salary
                                        </th>
                                        <th className="orange-text">
                                        Eligibility Criteria
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.postingFlag ? (props.postings.map(v => <tr><td></td><td></td><td></td></tr>)): (<tr><td className="red-text">You didn't post any vacancy yet!</td></tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>)) : (null)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        status: state.auth.status,
        allStudents: state.student.allStudents,

        UserProfilePictureFlag: false,
        UserProfilePictureURL: "",

        postings: [],
        postingFlag: true,


    }
}
const mapStateToDispatch = () => {
    return {
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Profile);