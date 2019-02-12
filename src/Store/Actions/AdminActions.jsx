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
