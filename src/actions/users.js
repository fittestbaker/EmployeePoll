export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function updateUsersAnswers({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USER_ANSWERS,
    authedUser,
    qid,
    answer,
  };
}

export function updateUsersQuestions(question) {
  return {
    type: UPDATE_USER_QUESTIONS,
    authedUser: question.author,
    qid: question.id,
  };
}
