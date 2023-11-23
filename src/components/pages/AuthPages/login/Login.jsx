import React from 'react';
import './Login.css';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import ImageAndWlc from '../ImageAndWlc';
import Title from '../Title';
import {useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
         <Container fluid>
        <Row>
          <Col md={7}>
            <ImageAndWlc/>
          </Col>
          <Col>
             <div className='login-section'>
               <Title title="Log In"/>
            <Form>
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

                  <Button type="submit" className="login-btn">Log In</Button>
            </Form>
            <div className='options-container'>
              <div onClick={()=>navigate('/ForgetPassword')}>Forget Password</div>
              <div onClick={()=> navigate('/Signup')}>Dont have an account?</div>
            </div>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login