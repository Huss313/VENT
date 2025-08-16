import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div id="contact-page" className="py-5 py-lg-6 bg-dark text-light">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title text-primary">Get in Touch</h1>
          <p className="section-subtitle lead text-light-50">We'd love to hear from you. Send us a message or find us below.</p>
        </div>

        <Row className="g-5">
          <Col lg={7}>
            <Card className="h-100 border-0 shadow-lg p-4 bg-secondary text-light">
              <Card.Body>
                <Card.Title className="fw-bold fs-4 mb-3">Send us a Message</Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control required type="text" placeholder="First name" className="bg-dark text-light border-0" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required type="text" placeholder="Last name" className="bg-dark text-light border-0" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="validationCustomUsername">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required className="bg-dark text-light border-0" />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationCustomMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message..." required className="bg-dark text-light border-0" />
                    <Form.Control.Feedback type="invalid">
                      Please enter your message.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" variant="primary" className="rounded-pill px-4">Send Message</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="h-100 border-0 shadow-lg p-4 bg-secondary text-light">
              <Card.Body>
                <Card.Title className="fw-bold fs-4 mb-3">Contact Information</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="bg-transparent text-light border-0 px-0 d-flex align-items-center">
                    <FaMapMarkerAlt className="text-primary me-3 fs-5" />
                    123 Digital Ave, Tech City, 90210
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-light border-0 px-0 d-flex align-items-center">
                    <FaPhone className="text-primary me-3 fs-5" />
                    +1 (234) 567-8901
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-light border-0 px-0 d-flex align-items-center">
                    <FaEnvelope className="text-primary me-3 fs-5" />
                    contact@mybusiness.com
                  </ListGroup.Item>
                </ListGroup>
                
                <h5 className="fw-bold mt-5 mb-3">Follow Us</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="text-primary"><FaWhatsapp size="1.5em" /></a>
                  <a href="#" className="text-primary"><FaInstagram size="1.5em" /></a>
                  <a href="#" className="text-primary"><FaLinkedin size="1.5em" /></a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="mt-5">
            <h5 className="text-center text-primary mb-3">Our Location</h5>
            <img 
                src="https://placehold.co/1200x400/2a2a2a/f1f1f1?text=Map+Placeholder" 
                alt="Map of our location" 
                className="img-fluid rounded-3 shadow-lg" 
            />
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;