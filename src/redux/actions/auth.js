import * as api from "../api";
import { AUTH,FETCH_USER,FETCH_USER_ID } from "../constants/actionType";
import { toast } from "react-toastify";
export const signin = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.signIn(newUser);
    dispatch({ type: AUTH, payload: data });
    toast.success("Login Sucessfull");
    setTimeout(() => {
      window.location.reload();
    }, 50);
  } catch (error) {
    toast.error("Invalid Email or Password");
  }
};

export const signup = (newUser) => async (dispatch) => {
  // Validation for empty fields
  const {
    userEmail,
    userPassword,
    userName,
  } = newUser;
  if (
    !userEmail ||
    !userPassword ||
    !userName 
  ) {
    toast.error("Please fill all the fields");
    return;
  }

  try {
    const { data } = await api.signUp(newUser);
    dispatch({ type: AUTH, payload: data });
    toast.success("Registered Successfully");
  } catch (error) {
    toast.error("Registration Failed");
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUser();
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUserByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUserById(id);
    dispatch({ type: FETCH_USER_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};


