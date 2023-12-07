import "./AddPoll.css";
import Nav from "../nav/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../../actions/questions";

const AddPoll = (props) => {
  const navigate = useNavigate();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const { authedUser, dispatch } = props;

  const handleChangeOptionOne = (e) => {
    const text = e.target.value;
    setOptionOneText(text);
  };

  const handleChangeOptionTwo = (e) => {
    const text = e.target.value;
    setOptionTwoText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveQuestion({
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
        author: authedUser,
      })
    );
    setOptionOneText("");
    setOptionTwoText("");
    navigate("/");
  };

  return (
    <div className="AddPoll">
      <Nav />
      <h1>Would You Rather</h1>
      <h2 style={{ color: "grey" }}>Create Your Own Poll</h2>
      <form className="new-poll" onSubmit={handleSubmit}>
        <h4>First Option</h4>
        <input
          type="text"
          value={optionOneText}
          onChange={handleChangeOptionOne}
          placeholder="Option One"
          id="newPollInput"
        ></input>
        <h4>Second Option</h4>
        <input
          type="text"
          value={optionTwoText}
          onChange={handleChangeOptionTwo}
          placeholder="Option Two"
          id="newPollInput"
        ></input>
        <br />
        <button
          type="submit"
          style={{ margin: "20px" }}
          disabled={optionOneText === "" || optionTwoText === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser: authedUser,
  };
};

export default connect(mapStateToProps)(AddPoll);
