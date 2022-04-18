import { combineReducers } from "redux";

import UserReducer from "./users/UserReducer";
import StudentLoginReducer from "./Reducers/StudentLoginReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  Users: StudentLoginReducer,
});

export default rootReducer;
