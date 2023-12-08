import Nav from "../nav/Nav";
import "./Home.css";
import { connect } from "react-redux";
import PollCard from "../pollcard/PollCard";
import { useState } from "react";

const Home = (props) => {
  const [tab, setTabPage] = useState("unanswered");

  const { newQuestions, done } = props;

  const handleTabToggle = (e) => {
    const text = e.target.value;
    console.log(text);
    setTabPage(text);
  };

  return (
    <div className="Home">
      <Nav />
      <div>
        <button onClick={handleTabToggle} value="unanswered">
          Unanswered
        </button>
        <button onClick={handleTabToggle} value="answered">
          Answered
        </button>
      </div>
      {tab === "unanswered" ? (
        <div>
          <h1>Unanswered</h1>
          <ul style={{ display: "inline-block" }}>
            {newQuestions.map((question) => {
              return (
                <li key={question.id}>
                  <PollCard question={question} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <h1>Answered</h1>
          <ul style={{ display: "inline-block" }}>
            {done.map((question) => {
              return (
                <li key={question.id}>
                  <PollCard question={question} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const answeredIds = Object.keys(users[authedUser].answers);
  const newQuestions = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const done = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    newQuestions: newQuestions,
    done: done,
  };
};

export default connect(mapStateToProps)(Home);
