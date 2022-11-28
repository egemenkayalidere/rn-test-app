import {ADD_NEW_USER, SET_USERS} from './actionTypes';

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: {
      users,
    },
  };
}

export function addNewUser(newUser) {
  return {
    type: ADD_NEW_USER,
    payload: {
      newUser,
    },
  };
}
