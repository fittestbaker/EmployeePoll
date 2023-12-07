import { getInitialData } from "../utils/api/api";
import { receiveUsers } from "./users";
import { receiveQuestion } from "./questions";
import { hideLoading, showLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestion(questions));
      dispatch(hideLoading());
    });
  };
}
