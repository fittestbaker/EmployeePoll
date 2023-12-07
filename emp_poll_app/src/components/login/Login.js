import "./Login.css";
import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";

const Login = (props) => {
  const { users, dispatch } = props;

  const [userSelect, setUserSelect] = useState("");

  const userHandleChange = (e) => {
    const username = e.target.value;
    setUserSelect(username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(userSelect));
    setUserSelect("");
  };

  return (
    <div className="LoginPage">
      <h1> Employee Polls Login </h1>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div>
          <h5>User</h5>
          <select name="User" onChange={userHandleChange}>
            <option value={""}> choose your user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button className="btn" type="submit" disabled={userSelect === ""}>
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
});

export default connect(mapStateToProps)(Login);
