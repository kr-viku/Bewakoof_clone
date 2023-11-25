import React, { useState } from "react";
import "./Signup.css";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ImageAndWlc from "../ImageAndWlc";
import Title from "../Title";
import {useNavigate } from 'react-router-dom';
import axios from "axios";
import { useBaseApi } from "../../../contextApi/BaseDomainContext";

const Signup = () => {
  
    const navigate = useNavigate();
    const [sigupData, setSignupData] = useState({
      name: '',
      email:'',
      password:''
    });

    const baseURL = useBaseApi();
    const handleChange= (e)=>{
      // console.log(e.target.value);
      setSignupData({
        ...sigupData,
        [e.target.name] : e.target.value
      })
    }
    // console.log(sigupData);

    const handleLoginSubmit = async (e) => {
      e.preventDefault();
  
      try {
       const response= await axios
          .post(`${baseURL}/api/v1/user/signup`,
            {
              "name": sigupData.name,
              "email": sigupData.email,
              "password": sigupData.password,
              "appType": "ecommerce",
            },
            {
              headers: {
                projectID: "4stjj1sb1x5a"
              },
            }
          )
          // .then((response) => console.log(response));
          console.log(response);

      if(response.status === 201)
      {
        const accessToken = response.data.token;
        // console.log(accessToken);
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        navigate('/');
      }


      } catch (e) {
        console.log("error occured in login", e);
      }
    };


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
              <Form onSubmit={handleLoginSubmit}>
              <Form.Group controlId="validEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={handleChange}
                    placeholder="Name"
                    name="name"
                  />
                </Form.Group>
                <Form.Group controlId="validEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
