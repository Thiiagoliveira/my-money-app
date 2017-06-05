import { combineReducers } from 'redux'
import DashboardReducer from '../Dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
const rootReducer = combineReducers({
    dashboard: DashboardReducer
})
export default rootReducer
