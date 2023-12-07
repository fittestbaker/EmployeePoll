import { hideLoading, showLoading } from "react-redux-loading-bar";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/api/_DATA";
import { updateUsersQuestions } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestion(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading());
    console.log(authedUser, qid, answer);
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(addAnswer({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}

function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(saveQuestion(formattedQuestion));
        dispatch(updateUsersQuestions(formattedQuestion));
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => alert("The was an error saving the question. Try again."));
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}
