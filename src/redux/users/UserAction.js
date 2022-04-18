import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCESS,
} from "./UserState";

export const FetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const FetchUsersSucess = (users) => {
  return {
    type: FETCH_USERS_SUCESS,
    payload: users,
  };
};
export const FetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const getUsers = () => {
  console.log("heyy");
  return (dispatch) => {
    dispatch(FetchUsersRequest);
    axios
      .get("http://localhost:3004/quetions")
      .then((res) => {
        const users = res.data;
        dispatch(FetchUsersSucess(users));
      })
      .catch((err) => {
        const errorMsg = err.mesage;
        dispatch(FetchUsersFailure(errorMsg));
      });
  };
};

export const setqst = (questions) => {
  return () => {
    axios
      .post("http://localhost:3004/quetions", questions)
      .then((res) => console.log(res.data))
      .then(err => console.log(err));
  };
};
