import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import React, { useState,useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { FetchAnswers, setqst } from "../redux";

export default function AdminPage() {
  const [show, setShow] = useState(false);

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [table, setTable] = useState(false);

  const StudentAnswers = useSelector((state) => state.Users.StudentAnswers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAnswers());
  }, []);

  const handleClose = () => {
    setShow(false);

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
  };
  const handleShow = () => setShow(true);

  const saveQuestion = (e) => {
    if (
      question === "" ||
      option1 === "" ||
      option2 === "" ||
      option3 === "" ||
      option4 === "" ||
      answer === ""
    ) {
      alert("please fill the field");
    } else {
      const Question = {
        Question: question,
        Option1: option1,
        Option2: option2,
        Option3: option3,
        Option4: option4,
        Answer: answer,
      };
      dispatch(setqst(Question));

      setShow(false);
    }

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
  };

  const handleTable = () => setTable(true);

  return (
    <div className="admin">
      <Button variant="primary" onClick={handleShow}>
        Add Question
      </Button>

      <Modal show={show} onHide={handleClose} className="w-75%">
        <Modal.Header closeButton className="Modal">
          <Modal.Title>Add your Question here</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal">
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Question</Form.Label>
              <Form.Control
                placeholder="Enter Quetsion"
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Option1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Option1"
                onChange={(e) => setOption1(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Option2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Option2"
                onChange={(e) => setOption2(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Option3</Form.Label>
              <Form.Control
                type="text"
                placeholder="Option3"
                onChange={(e) => setOption3(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Option4</Form.Label>
              <Form.Control
                type="text"
                placeholder="Option4"
                onChange={(e) => setOption4(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Answer</Form.Label>
              <Form.Control
                placeholder="Enter Answer"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer className="Modal">
          <Button variant="primary" onClick={(e) => saveQuestion(e)}>
            Save Question
          </Button>
        </Modal.Footer>
      </Modal>

      {table ? (
        <Table striped bordered hover size="sm" className="mt-5">
          <thead>
            <tr>
              <th>S.No</th>
              <th>User Name</th>
              <th>Score</th>
              <th>Answers</th>
            </tr>
          </thead>
          <tbody>
            {StudentAnswers &&
              StudentAnswers.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ele.user}</td>
                    <td>{ele.Score}</td>
                    <td>{ele.SelectedAnswers.map((ele) =>{
                      return(
                        <tr key={index}>
                          <td>{ele}</td>
                        </tr>
                        
                      )
                    })}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : (
        <button onClick={handleTable}>showScore Table </button>
      )}
    </div>
  );
}
