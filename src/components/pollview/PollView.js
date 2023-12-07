import "./PollView.css";
import { connect } from "react-redux";
import withRouter from "../../helpers/withRouter";
import Nav from "../nav/Nav";
import { handleAnswerQuestion } from "../../actions/questions";
import { updateUsersAnswers } from "../../actions/users";
import NotFound from "../notfound/NotFound";

const PollView = (props) => {
  const {
    authedUser,
    currentQuestion,
    currentUserAnswer,
    notFoundFlag,
    dispatch,
  } = props;

  const handleOnClick = (e) => {
    const answer = e.target.value;
    const qid = currentQuestion.id;
    dispatch(handleAnswerQuestion({ authedUser, qid, answer }));
    dispatch(updateUsersAnswers({ authedUser, qid, answer }));
  };

  return (
    <div className="PollView">
      {notFoundFlag ? (
        <div>
          <Nav />
          <h1>Poll by {currentQuestion.author}</h1>
          {currentUserAnswer === undefined ? (
            <div>
              <h2> Would You Rather? </h2>
              <div style={{ display: "inline-flex" }}>
                <div id="optionCard">
                  <p>{currentQuestion.optionOne.text}</p>
                  <button onClick={handleOnClick} value={"optionOne"}>
                    Click
                  </button>
                </div>
                <div id="optionCard">
                  <p>{currentQuestion.optionTwo.text}</p>
                  <button onClick={handleOnClick} value={"optionTwo"}>
                    Click
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: "inline-flex" }}>
                <div id="optionCard">
                  {currentUserAnswer === "optionOne" ? (
                    <p style={{ fontWeight: "bold" }}>
                      {currentQuestion.optionOne.text}
                    </p>
                  ) : (
                    <p>{currentQuestion.optionOne.text}</p>
                  )}
                  <p>
                    Number of people voted:{" "}
                    {currentQuestion.optionOne.votes.length}
                  </p>
                  <p>
                    Percentage of people:{" "}
                    {(
                      (currentQuestion.optionOne.votes.length /
                        (currentQuestion.optionOne.votes.length +
                          currentQuestion.optionTwo.votes.length)) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </p>
                </div>
                <div id="optionCard">
                  {currentUserAnswer === "optionTwo" ? (
                    <p style={{ fontWeight: "bold" }}>
                      {currentQuestion.optionTwo.text}
                    </p>
                  ) : (
                    <p>{currentQuestion.optionTwo.text}</p>
                  )}
                  <p>
                    Number of people voted:{" "}
                    {currentQuestion.optionTwo.votes.length}
                  </p>
                  <p>
                    Percentage of people:{" "}
                    {(
                      (currentQuestion.optionTwo.votes.length /
                        (currentQuestion.optionOne.votes.length +
                          currentQuestion.optionTwo.votes.length)) *
                      100
                    ).toFixed(2)}{" "}
                    %
                  </p>
                </div>
              </div>
              <h4> You voted for: {currentQuestion[currentUserAnswer].text}</h4>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Nav />
          <NotFound />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { question_Id } = props.router.params;
  const currentQuestion = questions[question_Id];
  const currentUserAnswer = users[authedUser].answers[question_Id];
  const notFoundFlag = Object.keys(questions).includes(question_Id);

  return {
    authedUser,
    currentQuestion,
    currentUserAnswer,
    notFoundFlag,
  };
};

export default withRouter(connect(mapStateToProps)(PollView));
