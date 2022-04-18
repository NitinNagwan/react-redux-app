import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsLogedOut, PostAnswers } from "../redux";
import { getUsers } from "../redux/users/UserAction";
import "./QuizApp.css";

function QuizApp() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const dispatch = useDispatch();

  const LoggedUser = useSelector((state) => state.Users.user);

  const data = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleshow = () => setShow(true);

  const nextQuestion = (e) => {
    e.preventDefault();
    if (status) {
      if (counter < data.length) {
        setCounter((counter) => counter + 1);
        setStatus(false);
      }
    } else {
      alert("submit first");
    }
    deselect();
    setAnswer("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer) {
      if (data[counter].Answer === answer) {
        setScore(score + 10);
      }
      userAnswer.push(answer);

      setStatus(true);
    } else {
      alert("Select your answer first");
    }
  };

  const postAnswer = (e) => {
    e.preventDefault();
    setCounter((counter) => counter + 1);
    dispatch(
      PostAnswers({
        user: LoggedUser,
        SelectedAnswers: userAnswer,
        Score: score,
      })
    );
  };
  const deselect = () => {
    input.checked = false;
  };

  const handleChange = (e) => {
    setAnswer(e.value);
    setInput(e);
  };

  const refresh = () => {
    const bool = window.confirm("You will be logged out");
    if (bool) {
      window.location.reload(true);
    }
  };
  // const handleLogout = () => {
  //   dispatch(IsLogedOut());
  // };
  return (
    <>
      {show ? (
        counter < data.length ? (
          <section className="frame">
            <div className="ct">
              <div className="head">
                <h1 className="heading animate-charcter">Quiz in Javascript</h1>
              </div>
              <hr />
              <div className="inner-content">
                {/* <img src="images/quiz.png" alt="" /> */}
                <form>
                  <h4 className="username">Welcome {LoggedUser}</h4>
                  <br />
                  <h6 className="counter">
                    Question {counter + 1} of {data.length}
                  </h6>

                  <div className="question-field">
                    <h4 className="question">
                      Q: {counter + 1} {data[counter].Question}
                    </h4>
                    <label htmlFor="amswer1">A.</label>
                    <input
                      type="radio"
                      id="1"
                      className="answer"
                      name="fav_language"
                      value={data[counter].Option1}
                      disabled={status}
                      onClick={(e) => handleChange(e.target)}
                    />
                    <label htmlFor="html" id="text_1">
                      {data[counter].Option1}
                    </label>
                    <br />
                    <label htmlFor="answer2">B.</label>
                    <input
                      type="radio"
                      id="2"
                      value={data[counter].Option2}
                      className="answer"
                      name="fav_language"
                      disabled={status}
                      onClick={(e) => handleChange(e.target)}
                    />
                    <label htmlFor="answer2" id="text_2">
                      {data[counter].Option2}
                    </label>
                    <br />
                    <label htmlFor="answer3">C.</label>
                    <input
                      type="radio"
                      id="3"
                      value={data[counter].Option3}
                      className="answer"
                      name="fav_language"
                      disabled={status}
                      onClick={(e) => handleChange(e.target)}
                    />
                    <label htmlFor="answer3" id="text_3">
                      {data[counter].Option3}
                    </label>
                    <br />
                    <label htmlFor="answer4">D.</label>
                    <input
                      type="radio"
                      id="4"
                      value={data[counter].Option4}
                      className="answer"
                      name="fav_language"
                      disabled={status}
                      onClick={(e) => handleChange(e.target)}
                    />
                    <label htmlFor="answer4" id="text_4">
                      {data[counter].Option4}
                    </label>
                    <br />
                    <button
                      className="ms-lg-5"
                      onClick={handleSubmit}
                      id="submit"
                      disabled={status}
                    >
                      submit
                    </button>
                    {counter === data.length - 1 ? (
                      <button className="start2" onClick={postAnswer}>
                        End Test
                      </button>
                    ) : (
                      <button
                        className="ms-lg-2"
                        id="next"
                        onClick={nextQuestion}
                      >
                        next
                      </button>
                    )}
                  </div>
                </form>
              </div>
              <hr />
              {/* <div className="d-flex justify-content-end me-5" >
              <button onClick={handleLogout}>
                  Log OUt
                </button>
              </div> */}
              <span className="correct"></span>
            </div>
          </section>
        ) : (
          <section className="frame2">
            <div className="form-box2">
              <div className="head2">
                <h1 className="">Result</h1>
              </div>
              <div className="inner-content2">
                <img src="/images/rainbow-6022476_960_720.png" alt="" />
                <div className="content">
                  <p>Thank you for playing </p>
                  <h5 className="score">Score: {score}</h5>
                </div>
                <button className="start2" onClick={refresh}>
                  Click to attempt again
                </button>
              </div>
            </div>
          </section>
        )
      ) : (
        <div className="Quiz">
          <div className="d-flex justify-content-between p-4 top_nav">
            {data.length > 1 ? (
              <h2> Quiz contains {data.length} Questions</h2>
            ) : (
              <h2> Quiz contains {data.length} Question</h2>
            )}
            <button onClick={handleshow}>Start Quiz</button>
          </div>
          <img src="images/Quiz.jpg"></img>
        </div>
      )}
    </>
  );
}

export default QuizApp;
