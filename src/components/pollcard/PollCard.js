import "./PollCard.css";
import { formatDate } from "../../helpers/formatTimestamp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PollCard = ({ question }) => {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setSubmit(true);
    const qid = e.target.value;
    navigate("/questions/" + qid);
  };

  return (
    <div id="questionCard">
      {submit ?? <p>Showing Question</p>}
      <p>{question.author}</p>
      <p>{formatDate(question.timestamp)}</p>
      <button onClick={handleOnClick} value={question.id}>
        Show
      </button>
    </div>
  );
};

export default PollCard;
