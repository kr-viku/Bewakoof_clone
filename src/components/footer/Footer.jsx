import React from 'react'
import './Footer.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PaymentsIcon from '@mui/icons-material/Payments';


const Footer = () => {
  return (
    <div className="footer-wrapper">
    <Container className='footer-container'>
       <Row className='row'>
          <Col xs={12} className="footer-logo">
            <Link to="/">Bewakoof</Link>
          </Col>
        </Row>
        <section>
          <Row className='row'>
            <Col sm={4} md={3} className="menu-section">
              <span className="footer-title">CUSTOMER SERVICE</span>
              <ul>
                <li>
                  <Link to="">Contact us</Link>
                </li>
                <li>
                  <Link to="">Track Order</Link>
                </li>
                <li>
                  <Link to="">Return Order</Link>
                </li>
                <li>
                  <Link to="">Cancel Order</Link>
                </li>
              </ul>
            </Col>
            <Col sm={4} md={3} className="menu-section">
              <span className="footer-title">COMPANY</span>
              <ul>
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">We are Hiring</Link>
                </li>
                <li>
                  <Link to="">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
              </ul>
            </Col>
            <Col sm={4} md={3} className="menu-section">
              <span className="footer-title">CONNECT WITH US</span>
              <ul>
                <li>
                  <Link to="">
                    <FacebookIcon />
                    <span>4.7M People Like this</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <InstagramIcon />
                    <span>10.7M People Like this</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <TwitterIcon />
                    <span>5.7M People Like this</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <PinterestIcon />
                    <span>2.7M People Like this</span>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={4} md={3} className="menu-section">
              <span className="footer-title">CONNECT WITH US</span>
              <ul>
                <li>
                  <form>
                    <input type="text" placeholder="Enter Email Id" />
                    <input
                      type="submit"
                      value="SUBSCRIBE"
                      className="subs-btn"
                    />
                  </form>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
        <section className="payment-gateway">
          <Row>
            <Col sm={4} md={3}>
              <ul>
                <li>
                  <Link to="">
                    <KeyboardReturnIcon />
                    <span>15 Days return policy*</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <PaymentsIcon />
                    <span> Cash on delivery*</span>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={4} md={3} className="menu-section">
              <span className="footer-title">DOWNLOAD THE APP</span>
              <div className="download-app">
                <Link to="/">
                  <Image
                    src= "../../assets/images/appIosStore.webp"
                    fluid
                  />
                </Link>
                <Link to="/">
                  <Image
                    src="../../assets/images/appAndroidStore.webp"
                    fluid
                  />
                </Link>
              </div>
            </Col>
            <Col sm={4} md={3} className="menu-section">
              <span className="footer-title">100% SECURE PAYMENT</span>
              <Image
                src="../../assets/images/appAndroidStore.webp"
                fluid
              />
            </Col>
          </Row>
        </section>
        </Container>
    </div>
  )
}

export default Footer