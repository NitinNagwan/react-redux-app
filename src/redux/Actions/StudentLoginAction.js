import axios from "axios";
import {
  FETCH_ANSWER,
  FETCH_USER,
  IS_ADMIN,
  IS_LOGEDIN,
  IS_LOGEDOUT,
} from "../Type";

export const FetchUser = (users) => {
  return {
    type: FETCH_USER,
    payload: users,
  };
};
export const FetchAnswer = (answers) => {
  return {
    type: FETCH_ANSWER,
    payload: answers,
  };
};

export const IsLogedIn = (user) => {
  return {
    type: IS_LOGEDIN,
    payload: user,
  };
};

export const IsLogedOut = () => {
  return {
    type: IS_LOGEDOUT,
  };
};

export const IsAdmin = () => {
  return {
    type: IS_ADMIN,
  };
};

const Fetch_User = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "applcation/json",
        },
        url: `${process.env.REACT_APP_API_URL}Students`,
      });

      const { data } = res;

      if (data) {
        await dispatch(FetchUser(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const SetUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        url: `${process.env.REACT_APP_API_URL}Students`,
        data: user,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

const PostAnswers = (info) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        url: `${process.env.REACT_APP_API_URL}StudentAnswer`,
        data: info,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
const FetchAnswers = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        url: `${process.env.REACT_APP_API_URL}StudentAnswer`,
       
      });
      const { data } = res;

      if (data) {
        await dispatch(FetchAnswer(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export { Fetch_User, SetUser, PostAnswers,FetchAnswers};
