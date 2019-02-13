import Type from "../const/Types";
import "../../config/fb";
import * as firebase from "firebase";

export const BlockS = (studentId, studentUserId) => {
    return dispatch => {
        firebase.database().ref().child(`Students/${studentId}`).remove()
        firebase.database().ref().child(`Status/${studentUserId}`).remove()
        firebase.database().ref().child("BlockList").push(studentUserId)
        dispatch({type: Type.blocks})
    }
}
export const BlockC = (CompanyId, ComapnyUserId) => {
    return (dispatch, getState) => {
        const state = getState();
        const vac = state.vacancy.allVacancies;
        const sp = vac.filter(v => v.userId === ComapnyUserId);
        firebase.database().ref().child(`Companies/${CompanyId}`).remove()
        firebase.database().ref().child(`Status/${ComapnyUserId}`).remove()
        sp.forEach(v => firebase.database().ref().child(`Vacancies/${v.postId}`).remove())
        firebase.database().ref().child("BlockList").push(ComapnyUserId)
        dispatch({type: Type.blockc})
    }
}
export const BlockList = () => {
    return dispatch => {
        firebase.database().ref().child("BlockList").on("value", (snapshot) => {
            const data = snapshot.val()
            const TemArr = []
            for (let key in data) {
                TemArr.push(data[key])
            }
            dispatch({type: Type.blockList, blockData: TemArr  })
        })
    }
}
export const UpdationRequest = (data) => {
    return dispatch => {
        console.log(data.status)
        if(data.status === "Student"){
            firebase.database().ref().child("UpdationRequest").child("Student").push(data)
            dispatch({type: Type.saveStudentUpdationData})
        }
        if(data.status === "Company"){
            firebase.database().ref().child("UpdationRequest").child("Company").push(data)
            dispatch({type: Type.saveCompanyUpdationData})
        }
    }
}

export const PervDataOfUpdationRequests = () => {
    return dispatch => {
        firebase.database().ref().child("UpdationRequest").child("Student").on("value", (snapshot) => {
            const dataS = snapshot.val();
            const TemArrS = [];
            for (let key in dataS) {
                TemArrS.push({userId:dataS[key].userId,
                    firstName: dataS[key].firstName, 
                    lastName: dataS[key].lastName,
                    age: dataS[key].age,
                    skills: dataS[key].skills,
                    gender: dataS[key].gender, 
                    phoneNumber: dataS[key].phoneNumber,
                    email: dataS[key].email, 
                    qua: dataS[key].qua,
                    dep: dataS[key].dep,
                    editId: dataS[key].editId,
                    urid: key
                })
            }
            dispatch({type: Type.SUpdationRequests, SupdationRequestsData: TemArrS})
        })
        firebase.database().ref().child("UpdationRequest").child("Company").on("value", (snapshot) => {
            const dataC = snapshot.val();
            const TemArrC = [];
            for (let key in dataC) {
                TemArrC.push({userId:dataC[key].userId,
                    cname:dataC[key].cname,
                    es:dataC[key].es,
                    hrname:dataC[key].hrname,
                    email:dataC[key].email,
                    cnum:dataC[key].cnum,
                    editId:dataC[key].editId,
                    urid: key
                })
            }
            dispatch({type: Type.CUpdationRequests, CupdationRequestsData: TemArrC})
        })

    }
}