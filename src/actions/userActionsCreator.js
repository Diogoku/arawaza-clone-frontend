import { LOGIN, LOGOUT } from "./actionTypes";

// USER ACTIONS CREATOR

// LOGIN
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
