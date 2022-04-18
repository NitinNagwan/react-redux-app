import { IsLogedOut } from "../Actions/StudentLoginAction";
import {
  FETCH_ANSWER,
  FETCH_USER,
  IS_ADMIN,
  IS_LOGEDIN,
  IS_LOGEDOUT,
} from "../Type";

const initinalState = {
  users: [],
  isAuthenticated: false,
  user: "",
  admin: false,
  StudentAnswers: [],
};

const reducer = (state = initinalState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case FETCH_ANSWER: {
      return {
        ...state,
        StudentAnswers: action.payload,
      };
    }

    case IS_LOGEDIN: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case IS_ADMIN: {
      return {
        ...state,
        admin: true,
        user: action.payload,
      };
    }

    case IS_LOGEDOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: "",
      };
    }
    default:
      return state;
  }
};

export default reducer;
