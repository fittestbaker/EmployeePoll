import Nav from "../nav/Nav";
import "./Home.css";
import { connect } from "react-redux";
import PollCard from "../pollcard/PollCard";

const Home = (props) => {
  const { newQuestions, done } = props;

  return (
    <div className="Home">
      <Nav />
      <h1>New Questions</h1>
      <ul style={{ display: "inline-flex" }}>
        {newQuestions.map((question) => {
          return (
            <li key={question.id}>
              <PollCard question={question} />
            </li>
          );
        })}
      </ul>
      <h1>Done</h1>
      <ul style={{ display: "inline-flex" }}>
        {done.map((question) => {
          return (
            <li key={question.id}>
              <PollCard question={question} />
            </li>
          );
        })}
      </ul>
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
