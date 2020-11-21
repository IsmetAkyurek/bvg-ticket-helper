import { updateStorage } from 'helpers';
import state from './state';

const initialState = state;

const reducers = (state = initialState, action) => {
  const { type, keyword, value, data } = action;

  switch (type) {
    case 'SET_TREE':
      state.tree = value;
      return state;
    case 'NEXT_STEP':
      state.progress.push(keyword);
      state.data[state.current] = value;
      state.current = keyword;
      updateStorage(state);
      return state;
    case 'PREV_STEP':
      state.progress.pop();
      state.current = state.progress[state.progress.length - 1];
      updateStorage(state)
      return state;
    case 'RESET_STEPS':
      state.progress.length = 1;
      state.current = 'name';
      state.data = {};
      updateStorage();
      return state;
    case 'SET_SESSION':
      state = data;
      return state;
    default:
      return state;
  }
};

export default reducers;