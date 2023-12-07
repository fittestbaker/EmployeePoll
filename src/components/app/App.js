import "./App.css";
import { Fragment, useEffect } from "react";
import { handleInitialData } from "../../actions/shared";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Home from "../home/Home";
import LoadingBar from "react-redux-loading-bar";
import PollView from "../pollview/PollView";
import NotFound from "../notfound/NotFound";
import AddPoll from "../addpoll/AddPoll";
import Leaderboard from "../leaderboard/Leaderboard";
import Nav from "../nav/Nav";

const App = (props) => {
  const { loading } = props;

  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <Fragment>
      <LoadingBar />
      <div className="App" data-testid="pollapp">
        {loading === true ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/questions/:question_Id" element={<PollView />} />
            <Route path="/add" element={<AddPoll />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route
              path="*"
              element={
                <div>
                  <Nav />
                  <NotFound />
                </div>
              }
            />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
