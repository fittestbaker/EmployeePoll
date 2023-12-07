import "./Leaderboard.css";
import Nav from "../nav/Nav";
import { connect } from "react-redux";

const Leaderboard = (props) => {
  const { orderedLeaderboard } = props;

  return (
    <div className="Leaderboard">
      <Nav />
      <h1>Leaderboard</h1>
      <table id="leaderboardTable">
        <tr>
          <th>Name</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
        {orderedLeaderboard.map((user) => (
          <tr>
            <td>
              <p>{user.name}</p>
              {user.avatarURL === null ? (
                <img
                  src={"../../avatars/img_avatar.jpg"}
                  alt="Avatar"
                  id="avatar"
                ></img>
              ) : (
                <img src={user.avatarURL} alt="Avatar" id="avatar"></img>
              )}
            </td>
            <td>{user.numOfAnswered}</td>
            <td>{user.numOfAsked}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  let leaderboardArray = [];
  Object.values(users).forEach((user) => {
    let userInfo = {
      name: user.name,
      avatarURL: user.avatarURL,
      numOfAsked: user.questions.length,
      numOfAnswered: Object.keys(user.answers).length,
      leaderboardscore:
        user.questions.length + Object.keys(user.answers).length,
    };
    leaderboardArray.push(userInfo);
  });
  const orderedLeaderboard = leaderboardArray.sort(
    (a, b) => b.leaderboardscore - a.leaderboardscore
  );
  console.log(leaderboardArray);
  return {
    orderedLeaderboard: orderedLeaderboard,
  };
};

export default connect(mapStateToProps)(Leaderboard);
