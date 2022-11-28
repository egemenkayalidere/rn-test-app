import {ADD_NEW_USER, SET_USERS} from './actionTypes';

var initialState = {
  users: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.payload.users};
    case ADD_NEW_USER:
      return {...state, users: state.users.concat(action.payload.newUser)};
    default:
      return state;
  }
};

export default AppReducer;
