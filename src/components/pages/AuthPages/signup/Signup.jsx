import React from "react";
import "./Signup.css";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ImageAndWlc from "../ImageAndWlc";
import Title from "../Title";
import {useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className="signup-wrapper">
      <Container fluid>
        <Row>
          <Col md={7}>
            <ImageAndWlc />
          </Col>
          <Col>
            <div className="login-section">
              <Title title="Sign In" />
              <Form>
              <Form.Group controlId="validEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    // onChange={handleChange}
                    placeholder="Name"
                    name="name"
                  />
                </Form.Group>
                <Form.Group controlId="validEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    // onChange={handleChange}
                    placeholder="Email"
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="validPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    // onChange={handleChange}
                    name="password"
                  />
                </Form.Group>

                <Button type="submit" className="login-btn">
                  Sign In
                </Button>
              </Form>
              <div className="options-container">
                <div onClick={() => navigate("/ForgetPassword")}>
                  Forget Password
                </div>
                <div onClick={() => navigate("/Login")}>
                Already have an account?
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
