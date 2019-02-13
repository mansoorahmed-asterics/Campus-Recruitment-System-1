import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Loader from '../../Loader/Loader';
const Vacancies = (props) => {
    const details = (id) => {
        props.history.push(`/CDetails/${id}`)
    }
    return (<Fragment>
        <div className="container hide-on-small-only"> <br /> <br /> {props.user ? (props.allVacancies.length > 0 ? (<div className="row">
            <div className="col l12 s12 m12">
                <table><thead className="orange darken-3 z-depth-1">
                    <tr className="white-text">
                        <th>S.No</th>
                        <th>Job Name</th>
                        <th>Job Description</th>
                        <th>Salary</th>
                        <th>Eligibility Criteria</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {props.allVacancies.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{++i}.
                            </td>
                                    <td>
                                        {v.jobname}
                                    </td>
                                    <td>
                                        {v.jobdes}
                                    </td>
                                    <td>
                                        {v.salary}
                                    </td>
                                    <td>
                                        {v.ec}
                                    </td>
                                    <td>
                                        <span className="btn-floating orange" onClick={() => details(v.userId)}>
                                            <i className="material-icons white-text text-darken-3">info</i>
                                        </span>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>) : (<div className="center">
            <h5 className="orange-text text-darken-1">No Company has posted any vacancy yet!</h5>
        </div>)) : (null)}</div>
        <div className="hide-on-med-and-up"> <br /> <br /> {props.user ? (props.allVacancies.length > 0 ? (<div className="row">
            <div className="col l12 s12 m12">
                <table><thead className="orange darken-3 z-depth-1">
                    <tr className="white-text">
                        <th>S.No</th>
                        <th>Job Name</th>
                        <th>Job Description</th>
                        <th>Salary</th>
                        <th>Eligibility Criteria</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {props.allVacancies.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{++i}.
                                </td>
                                    <td>
                                        {v.jobname}
                                    </td>
                                    <td>
                                        {v.jobdes}
                                    </td>
                                    <td>
                                        {v.salary}
                                    </td>
                                    <td>
                                        {v.ec}
                                    </td>
                                    <td>
                                        <span className="btn-floating orange" onClick={() => details(v.userId)}>
                                            <i className="material-icons white-text text-darken-3">info</i>
                                        </span>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>) : (<div className="center">
            <h5 className="orange-text text-darken-1">No Company has posted any vacancy yet!</h5>
        </div>)) : (<Loader />)}</div>
    </Fragment>

    );
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        allVacancies: state.vacancy.allVacancies,
    }
}
export default connect(mapStateToProps)(Vacancies);