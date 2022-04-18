import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCESS,
  } from "./UserState";

const initinalState = {
    loading: false,
    data: [],
    name: 'nitin',
    error: ''
}

  const reducer = (state= initinalState ,action) => {
      switch(action.type){
          case FETCH_USERS_REQUEST:{
              return{
                  ...state,
                  loading: true
              }

          }
          case FETCH_USERS_SUCESS:{
              return{
                  ...state,
                  loading: false,
                  data: action.payload
              }
          }
          case FETCH_USERS_FAILURE:{
              return{
                  ...state,
                  loading: false,
                  error: action.payload
              }
          }

          default: return state
      }
  }

export default reducer