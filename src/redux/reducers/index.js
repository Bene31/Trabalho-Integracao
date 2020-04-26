//import { combineReducers } from "../../../../../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux";
import { combineReducers } from "redux"
import {
    reducer as reduxFormReducer
} from 'redux-form'

export default combineReducers({
    form: reduxFormReducer
})