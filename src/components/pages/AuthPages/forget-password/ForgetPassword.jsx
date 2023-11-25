import React, { useState } from 'react'
import './ForgetPassword.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ImageAndWlc from "../ImageAndWlc";
import Title from "../Title";
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useBaseApi } from '../../../contextApi/BaseDomainContext';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const[forgetPasswordData, setForgetPasswordData]= useState({
      name:'',
      email:'',
      password:''
    })

    const baseURL = useBaseApi();

    const handleForgetPassword = async (e) => {
      e.preventDefault();
  
      try {
       const response= await axios
          .post(`${baseURL}/api/v1/user/forgotPassword`,
            {
              "name": forgetPasswordData.name,
              "email": forgetPasswordData.email,
              "password": forgetPasswordData.password,
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
      } catch (e) {
        console.log("error occured in login", e);
      }
    };



    const handleChange= (e)=>{
      // console.log(e.target.value);
      setForgetPasswordData({
        ...forgetPasswordData,
        [e.target.name] : e.target.value
      })
    }
    console.log(forgetPasswordData);
    return (
      <div className="forgetPassword-wrapper">
        <Container fluid>
          <Row>
            <Col md={7}>
              <ImageAndWlc />
            </Col>
            <Col>
              <div className="login-section">
                <Title title="Reset Password" />
                <Form onSubmit={handleForgetPassword}>
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
                    Reset Password
                  </Button>
                </Form>
                <div className="options-container">
                  <div onClick={() => navigate("/Login")}>
                  Already have an account?
                  </div>
                  <div onClick={() => navigate("/Signup")}>
                  Dont have an account?
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default ForgetPassword