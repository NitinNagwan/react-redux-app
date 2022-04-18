import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { IsLogedOut, setqst } from "../redux";
import { Link } from "react-router-dom";

export default function QuenstinCreate() {
 

  return (
    <div className="front-page">
      <div className="d-flex justify-content-between front-nav">
        <Link to='/Admin'>
        <Button variant="primary"  onClick={() => window.confirm("please login as an Admin")}>
          Add Question
        </Button>
        </Link>

        {/* <h1 className="text-white">Quiz</h1> */}
        {/* <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              
            </div>
          </div>
        </div> */}
        <h3 class="animate-charcter"> QUIZ</h3>

        <Link to="/Quiz">
          <Button
            variant="dark"
            onClick={() => window.confirm("please login first")}
          >
            Go To Quiz
          </Button>
        </Link>
      </div>

      {/* <h1>Welcome To Quiz A pp</h1> */}

      
    </div>
  );
}
