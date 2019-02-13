import React from 'react'
import { connect } from "react-redux";
import DefaultPic from '../../../defaultPic.jpg';
import DefaultPicC from "../../../defaultPicC.jpg";
const Profile = (props) => {
    const currentStudent = props.allStudents.find(stu => {
        return stu.userId === props.user.uid
    })
    const currentCompany = props.allCompanies.find(com => {
        return com.userId === props.user.uid
    })
    const currentCompanyVacancies = props.allVacancies.filter(van => {
        return van.userId === props.user.uid
    })
    return (
        <div>
            <br />
            <br />
            {props.user ? (props.status === "Student" ? (<div className="container">
                <div className="row">
                    <div className="col s12 m8 l6 offset-l3 offset-m2">
                        <div className="card orange lighten-5">
                            <div className="card-image">
                                <img src={DefaultPic} alt="user-profile" className="pImage" />
                                {props.isDisabledS ? (<span className="btn-floating halfway-fab waves-effect waves-light grey lighten-2"><i className="material-icons">add</i></span>) : (<span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => { props.history.push("/Registration") }}><i className="material-icons">add</i></span>)}      
                            </div>
                            <div className="card-content">
                            <div className="card-title orange-text">
                                STUDENT'S PROFILE
                            </div>
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
                </div>
            </div>) : (<div className="row">
                <div className="col l4 s12 offset-l1">
                    <div className="card">
                        <div className="card-image">
                            <img src={DefaultPicC} alt="user-profile" className="pImage" />
                            {props.isDisabledC ? (<span className="btn-floating halfway-fab waves-effect waves-light grey lighten-2"><i className="material-icons">add</i></span>):(<span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => { props.history.push("/CompanyInfo") }}><i className="material-icons">add</i></span>)}
                        </div>
                        <div className="card-content">
                            <div className="card-title orange-text">
                                COMPANY'S INFORMATION
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="grey-text">Comapny Name</th>
                                        <td>{currentCompany.cname}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Established</th>
                                        <td>{currentCompany.es}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">HR Name</th>
                                        <td>{currentCompany.hrname}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Email</th>
                                        <td>{currentCompany.email}</td>
                                    </tr>
                                    <tr>
                                        <th className="grey-text">Conatct Number</th>
                                        <td>{currentCompany.cnum}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col l7 s12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title orange-text">
                                POSTED VACANCIES
                            </div>
                            {currentCompanyVacancies.length > 0 ? (<table>
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
                                    {currentCompanyVacancies.map(v => <tr key={v.postId}>
                                        <td>{v.jobname}</td>
                                        <td>{v.jobdes}</td>
                                        <td>{v.salary}</td>
                                        <td>{v.ec}</td>
                                    </tr>)}
                                </tbody>
                            </table>) : (<div className="red-text">You didn't post any vacancy yet!</div>)}
                        </div>
                    </div>
                </div>
            </div>)) : (null)}
        </div>
    )
}
const mapStateToProps = (state) => {
    const userId = state.auth.currentUser ? (state.auth.currentUser.uid) : (null)
    const checkS = state.auth.currentUser ? (state.admin.Srequests.find(v => v.userId === userId )) : null;
    const checkC = state.auth.currentUser ? (state.admin.Crequests.find(v => v.userId === userId)) : null;
    return {
        user: state.auth.currentUser,
        status: state.auth.status,
        allStudents: state.student.allStudents,
        allCompanies: state.company.allCompanies,
        allVacancies: state.vacancy.allVacancies,
        isDisabledS: checkS,
        isDisabledC: checkC,
    }
}
export default connect(mapStateToProps)(Profile);