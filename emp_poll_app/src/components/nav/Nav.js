import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";

const Nav = (props) => {
  const { authedUser, users, dispatch } = props;

  const currentUser = users.filter((user) => user.id === authedUser)[0];

  const handleLogout = () => {
    dispatch(setAuthedUser(null));
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <div>
            <p style={{ fontWeight: "bold" }}>Hello, {currentUser.name}</p>
            {currentUser.avatarURL === null ? (
              <img
                src={"../../avatars/img_avatar.jpg"}
                alt="Avatar"
                id="avatar"
              ></img>
            ) : (
              <img src={currentUser.avatarURL} alt="Avatar" id="avatar"></img>
            )}
          </div>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">New</Link>
        </li>
        <li>
          <Link onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: authedUser,
  users: Object.values(users),
});

export default connect(mapStateToProps)(Nav);
