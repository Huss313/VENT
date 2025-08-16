import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaLaptopCode, FaCogs, FaUsers, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  // Typewriter state
  const [typedText, setTypedText] = useState('');
  const fullText = "Innovative Solutions for Modern Businesses.";
  const typingSpeed = 70; // ms

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, typingSpeed);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header
        id="hero"
        className="position-relative d-flex align-items-center text-center text-light"
        style={{
          minHeight: '100vh',
          background: 'url(https://images.unsplash.com/photo-1542831371-29b0f74f94c5?q=80&w=2940&auto=format&fit=crop) no-repeat center center/cover'
        }}
      >
        <div
          className="hero-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        ></div>
        <Container className="position-relative z-1">
          <Row className="justify-content-center">
            <Col lg={10}>
              <h1 className="display-3 fw-bold mb-4">
                {typedText}
                <span
                  className="text-primary"
                  style={{ animation: 'blink-caret 1s step-end infinite' }}
                >
                  |
                </span>
              </h1>
              <p className="lead fs-5 mb-5 text-white-50">
                We are a team of visionary developers and designers committed to building
                beautiful, functional, and user-centric web applications that drive your business forward.
              </p>
              <Button variant="primary" size="lg" className="rounded-pill px-5 py-3 shadow">
                Get a Free Quote <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Services Showcase Section */}
      <section id="services-showcase" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title text-dark">Our Expertise</h2>
            <p className="section-subtitle lead text-secondary">
              Providing top-tier digital solutions to help you succeed.
            </p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-lg text-center p-4 bg-white">
                <Card.Body>
                  <FaLaptopCode size="3.5rem" className="text-primary mb-3" />
                  <Card.Title className="fw-bold text-dark">Web Development</Card.Title>
                  <Card.Text className="text-secondary">
                    Crafting responsive, high-performance websites from the ground up, tailored to your unique needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-lg text-center p-4 bg-white">
                <Card.Body>
                  <FaCogs size="3.5rem" className="text-primary mb-3" />
                  <Card.Title className="fw-bold text-dark">UI/UX Design</Card.Title>
                  <Card.Text className="text-secondary">
                    Designing intuitive and engaging user interfaces that not only look great but also drive user satisfaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-lg text-center p-4 bg-white">
                <Card.Body>
                  <FaUsers size="3.5rem" className="text-primary mb-3" />
                  <Card.Title className="fw-bold text-dark">Digital Strategy</Card.Title>
                  <Card.Text className="text-secondary">
                    Developing comprehensive digital marketing and growth strategies to maximize your online presence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-5 text-center text-light" style={{ backgroundColor: '#0d6efd' }}>
        <Container>
          <h2 className="fw-bold mb-3">Ready to Start Your Project?</h2>
          <p className="lead mb-4">Let's work together to bring your vision to life.</p>
          <Button variant="light" size="lg" className="rounded-pill px-5 py-3 text-primary fw-bold shadow">
            Contact Us Today
          </Button>
        </Container>
      </section>

      {/* Optional CSS */}
      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: currentColor; }
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .section-subtitle {
          font-size: 1.1rem;
        }
      `}</style>
    </>
  );
};

export default HomePage;
