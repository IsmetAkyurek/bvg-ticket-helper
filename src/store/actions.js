import types from "./types";

const actions = {
  nextStep: (keyword, value) => (dispatch) => {
    dispatch({ type: types.NEXT_STEP, keyword, value });
  },
  prevStep: () => (dispatch) => {
    dispatch({ type: types.PREV_STEP });
  },
  reset: () => (dispatch) => {
    dispatch({ type: types.RESET_STEPS });
  },
  setSession: (data) => (dispatch) => {
    dispatch({ type: types.SET_SESSION, data });
  },
};

export default actions;