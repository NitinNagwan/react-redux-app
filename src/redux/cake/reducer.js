import { ADD_CAKE, BUY_CAKE } from "./cakeState";

export const initinalState = {
  numberofCakes: 10,
};

const reducer = (state = initinalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numberofCakes <= 0) {
        return {
            numberofCakes : 0
        }
      } else {
        return {
          ...state,
          numberofCakes: state.numberofCakes - 1,
        };
      }
      case ADD_CAKE:
          return{
              ...state,numberofCakes: state.numberofCakes + action.payload
          }
    default:
      return state;
  }
};

export default reducer;
