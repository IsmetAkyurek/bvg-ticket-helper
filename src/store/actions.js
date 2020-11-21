const actions = {
  nextStep: (keyword, value) => (dispatch) => {
    dispatch({ type: 'NEXT_STEP', keyword, value });
  },
  prevStep: () => (dispatch) => {
    dispatch({ type: 'PREV_STEP' });
  },
  reset: () => (dispatch) => {
    dispatch({ type: 'RESET_STEPS' });
  },
  setSession: (data) => (dispatch) => {
    dispatch({ type: 'SET_SESSION', data });
  },
};

export default actions;