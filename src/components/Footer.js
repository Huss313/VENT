import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold text-primary">My Awesome Business</h5>
            <p className="text-white-50">
              We are a team of passionate creators building innovative solutions for a better world.
              Our mission is to empower businesses with technology that makes a difference.
            </p>
            <p className="mb-0 text-white-50">
              © 2025 All Rights Reserved.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="fw-bold text-primary">Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent border-0">
                <a href="#about" className="text-white-50 text-decoration-none">About Us</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a href="#services" className="text-white-50 text-decoration-none">Services</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a href="#team" className="text-white-50 text-decoration-none">Our Team</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a href="#contact" className="text-white-50 text-decoration-none">Contact</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-bold text-primary">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-3">
              <a href="#" className="text-white-50 fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-white-50 fs-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-white-50 fs-4">
                <FaInstagram />
              </a>
              <a href="#" className="text-white-50 fs-4">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;