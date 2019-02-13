import Type from "../const/Types";
const initState = {
    blockList: [],
    userIsBlocked: false,
    Srequests: [],
    Crequests: [],
}
const AdminReducer = (state = initState, action) => {
    switch(action.type){
        case Type.blockList: 
        return {
            ...state,
            blockList: action.blockData,
        }
        case Type.blocks: 
        return state = {
            ...state,
        }
        case Type.blockc: 
        return state = {
            ...state,
        }
        case Type.userIsBlocked:
        return state = {
            ...state,
            userIsBlocked: true
        }
        case Type.userIsNotBlocked:
        return state = {
            ...state,
            userIsBlocked: false,
        }
        case Type.SUpdationRequests:
        return state = {
            ...state,
            Srequests :action.SupdationRequestsData,
        }
        case Type.CUpdationRequests:
        return state = {
            ...state,
            Crequests :action.CupdationRequestsData,
        }
        case Type.RequestCAccept:
        return state;
        case Type.RequestSAccept:
        return state;
        case Type.RequestSCancel:
        return state;
        case Type.RequestCCancel:
        return state;
        default:
        return state;
    }
}
export default AdminReducer;