import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaChartLine, FaMobileAlt } from 'react-icons/fa';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('web-dev');

  return (
    <div id="services-page" className="py-5 py-lg-6 bg-dark text-light">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title text-primary">Our Services</h1>
          <p className="section-subtitle lead text-light-50">Tailored digital solutions to elevate your brand.</p>
        </div>

        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Row className="g-4">
            <Col lg={4}>
              <Nav variant="pills" className="flex-column nav-pills-custom">
                <Nav.Item>
                  <Nav.Link eventKey="web-dev" className="p-4 rounded-3 mb-2">
                    <FaCode className="me-3 fs-3" /> Web Development
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ui-ux" className="p-4 rounded-3 mb-2">
                    <FaPaintBrush className="me-3 fs-3" /> UI/UX Design
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="digital-marketing" className="p-4 rounded-3 mb-2">
                    <FaChartLine className="me-3 fs-3" /> Digital Marketing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="mobile-dev" className="p-4 rounded-3 mb-2">
                    <FaMobileAlt className="me-3 fs-3" /> Mobile App Development
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col lg={8}>
              <Tab.Content>
                <Tab.Pane eventKey="web-dev">
                  <Card className="border-0 shadow-lg p-4 h-100 bg-secondary text-light">
                    <Card.Body>
                      <h3 className="fw-bold text-primary mb-3">Custom Web Development</h3>
                      <p className="lead text-light-50">We build high-performance, scalable, and secure websites.</p>
                      <ul className="list-unstyled mt-4 text-light-50">
                        <li><FaCheckCircle className="text-primary me-2" /> Full-stack development</li>
                        <li><FaCheckCircle className="text-primary me-2" /> E-commerce solutions</li>
                        <li><FaCheckCircle className="text-primary me-2" /> CMS integration</li>
                        <li><FaCheckCircle className="text-primary me-2" /> API development and integration</li>
                      </ul>
                      <Button variant="primary" className="mt-4">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="ui-ux">
                  <Card className="border-0 shadow-lg p-4 h-100 bg-secondary text-light">
                    <Card.Body>
                      <h3 className="fw-bold text-primary mb-3">User-Centric Design</h3>
                      <p className="lead text-light-50">Creating intuitive and beautiful digital experiences.</p>
                      <ul className="list-unstyled mt-4 text-light-50">
                        <li><FaCheckCircle className="text-primary me-2" /> Wireframing and prototyping</li>
                        <li><FaCheckCircle className="text-primary me-2" /> Visual and graphic design</li>
                        <li><FaCheckCircle className="text-primary me-2" /> User research and testing</li>
                        <li><FaCheckCircle className="text-primary me-2" /> Responsive design for all devices</li>
                      </ul>
                      <Button variant="primary" className="mt-4">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="digital-marketing">
                  <Card className="border-0 shadow-lg p-4 h-100 bg-secondary text-light">
                    <Card.Body>
                      <h3 className="fw-bold text-primary mb-3">Growth-Oriented Marketing</h3>
                      <p className="lead text-light-50">Strategies to boost your online visibility and conversion rates.</p>
                      <ul className="list-unstyled mt-4 text-light-50">
                        <li><FaCheckCircle className="text-primary me-2" /> Search Engine Optimization (SEO)</li>
                        <li><FaCheckCircle className="text-primary me-2" /> Social Media Management</li>
                        <li><FaCheckCircle className="text-primary me-2" /> Content strategy</li>
                        <li><FaCheckCircle className="text-primary me-2" /> Paid advertising campaigns</li>
                      </ul>
                      <Button variant="primary" className="mt-4">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="mobile-dev">
                  <Card className="border-0 shadow-lg p-4 h-100 bg-secondary text-light">
                    <Card.Body>
                      <h3 className="fw-bold text-primary mb-3">Custom Mobile Applications</h3>
                      <p className="lead text-light-50">Building powerful and intuitive apps for iOS and Android.</p>
                      <ul className="list-unstyled mt-4 text-light-50">
                        <li><FaCheckCircle className="text-primary me-2" /> Native and cross-platform apps</li>
                        <li><FaCheckCircle className="text-primary me-2" /> UI/UX for mobile</li>
                        <li><FaCheckCircle className="text-primary me-2" /> App store submission assistance</li>
                        <li><FaCheckCircle className="text-primary me-2" /> Post-launch maintenance</li>
                      </ul>
                      <Button variant="primary" className="mt-4">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <style jsx>{`
          .nav-pills-custom .nav-link {
            background-color: var(--card-bg);
            color: var(--text-light);
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
          }
          .nav-pills-custom .nav-link:hover {
            background-color: #3b3b3b;
          }
          .nav-pills-custom .nav-link.active {
            background-color: var(--accent-color);
            color: #fff;
            border-color: var(--accent-color);
            transform: translateX(10px);
          }
        `}</style>
      </Container>
    </div>
  );
};

export default ServicesPage;
