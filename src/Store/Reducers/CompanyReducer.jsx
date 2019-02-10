import Type from "../const/Types";
const initialSate = {
    allCompanies: [],
    pervDataOfCompanies: false,
}
const CompanyReducer = (state = initialSate, action) => {
    switch (action.type) {
        case Type.pervDataOfCompanies:
            return state = {
                ...state,
                allCompanies: action.data,
                pervDataOfCompanies: true
            }
        case Type.newCompany:
            return state;
        case Type.updateCompany:
            return state;
        default:
            return state;
    }
}
export default CompanyReducer;