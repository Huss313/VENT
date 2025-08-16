import React from 'react';
import { Container, Row, Col, Card, Accordion, ListGroup } from 'react-bootstrap';
import { FaRocket, FaBullseye, FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div id="about-page" className="py-5 py-lg-6 bg-dark text-light">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title text-primary">Our Story</h1>
          <p className="section-subtitle lead text-light-50">From a passion project to a digital powerhouse.</p>
        </div>
        <Row className="g-5 mb-5">
          <Col md={6}>
            <Card className="h-100 border-0 shadow-lg bg-secondary text-light">
              <Card.Body>
                <Card.Title className="fw-bold fs-4 mb-3">Who We Are</Card.Title>
                <Card.Text className="text-light-50">
                  Founded in 2018, we started as a small team with a big vision: to revolutionize the way businesses connect with their customers online. Our journey is built on a foundation of creativity, technical excellence, and a relentless pursuit of client satisfaction. We've grown into a full-service digital agency, but our core values remain the same.
                </Card.Text>
                <Card.Text className="text-light-50">
                  We are a collective of developers, designers, strategists, and problem-solvers who thrive on challenges. Our collaborative approach ensures every project is a masterpiece, blending aesthetic appeal with robust functionality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca8849d1?q=80&w=2800&auto=format&fit=crop" alt="Team collaborating" className="img-fluid rounded-3 shadow-lg" />
          </Col>
        </Row>

        <Row className="g-5 my-5">
          <Col md={6}>
            <Card className="h-100 border-0 shadow-lg bg-secondary text-light">
              <Card.Body>
                <FaRocket size="3rem" className="text-primary mb-3" />
                <Card.Title className="fw-bold fs-4 mb-3">Our Mission</Card.Title>
                <Card.Text className="text-light-50">
                  To deliver transformative digital solutions that empower businesses to grow, innovate, and lead their industries. We are committed to crafting experiences that are not just effective, but truly memorable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 border-0 shadow-lg bg-secondary text-light">
              <Card.Body>
                <FaBullseye size="3rem" className="text-primary mb-3" />
                <Card.Title className="fw-bold fs-4 mb-3">Our Vision</Card.Title>
                <Card.Text className="text-light-50">
                  To be the global leader in digital innovation, setting new standards for design, technology, and customer partnership, and creating a more connected and efficient world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <div className="text-center mt-5 mb-4">
          <h2 className="section-title text-primary">Frequently Asked Questions</h2>
          <p className="section-subtitle lead text-light-50">Your questions, answered.</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion defaultActiveKey="0" className="shadow-lg">
              <Accordion.Item eventKey="0" className="bg-secondary text-light">
                <Accordion.Header>What is your process for a new project?</Accordion.Header>
                <Accordion.Body className="bg-dark text-light-50">
                  Our process begins with a detailed discovery phase to understand your goals. We then move to strategy, design, development, and a final launch, followed by ongoing support.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="bg-secondary text-light">
                <Accordion.Header>How long does a typical project take?</Accordion.Header>
                <Accordion.Body className="bg-dark text-light-50">
                  Project timelines vary based on complexity, but a standard website can take anywhere from 4 to 12 weeks. We will provide a detailed timeline after our discovery phase.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="bg-secondary text-light">
                <Accordion.Header>Do you offer post-launch support?</Accordion.Header>
                <Accordion.Body className="bg-dark text-light-50">
                  Yes, we offer various maintenance and support packages to ensure your website remains secure, updated, and performing at its best long after launch.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;