import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'web-dev', image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e993f?q=80&w=2940&auto=format&fit=crop' },
  { id: 2, title: 'Mobile Banking App', category: 'mobile-dev', image: 'https://images.unsplash.com/photo-1556740738-b6358356974d?q=80&w=2942&auto=format&fit=crop' },
  { id: 3, title: 'Corporate Website Redesign', category: 'web-dev', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2940&auto=format&fit=crop' },
  { id: 4, title: 'Data Visualization Dashboard', category: 'ui-ux', image: 'https://images.unsplash.com/photo-1549419358-1f4963579b15?q=80&w=2942&auto=format&fit=crop' },
  { id: 5, title: 'Social Media Strategy', category: 'digital-marketing', image: 'https://images.unsplash.com/photo-1533750529241-1378f844b2f2?q=80&w=2940&auto=format&fit=crop' },
  { id: 6, title: 'Fitness Tracker App', category: 'mobile-dev', image: 'https://images.unsplash.com/photo-1550565118-e366037a34e0?q=80&w=2800&auto=format&fit=crop' },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <div id="projects-page" className="py-5 py-lg-6 bg-dark text-light">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title text-primary">Our Work</h1>
          <p className="section-subtitle lead text-light-50">A showcase of our most successful projects.</p>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Button variant={filter === 'all' ? 'primary' : 'outline-light'} onClick={() => setFilter('all')} className="mx-2 rounded-pill">All</Button>
          <Button variant={filter === 'web-dev' ? 'primary' : 'outline-light'} onClick={() => setFilter('web-dev')} className="mx-2 rounded-pill">Web Dev</Button>
          <Button variant={filter === 'mobile-dev' ? 'primary' : 'outline-light'} onClick={() => setFilter('mobile-dev')} className="mx-2 rounded-pill">Mobile Dev</Button>
          <Button variant={filter === 'ui-ux' ? 'primary' : 'outline-light'} onClick={() => setFilter('ui-ux')} className="mx-2 rounded-pill">UI/UX</Button>
          <Button variant={filter === 'digital-marketing' ? 'primary' : 'outline-light'} onClick={() => setFilter('digital-marketing')} className="mx-2 rounded-pill">Marketing</Button>
        </div>

        <Row className="g-4">
          {filteredProjects.map(project => (
            <Col md={6} lg={4} key={project.id}>
              <Card className="project-card h-100 border-0 shadow-lg overflow-hidden position-relative">
                <Card.Img variant="top" src={project.image} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body className="bg-secondary text-light">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.category.replace('-', ' ')}</Card.Text>
                  <div className="project-overlay d-flex align-items-center justify-content-center">
                    <Button variant="primary" className="rounded-pill">
                      View Project <FaLink className="ms-2" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <style jsx>{`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
          }
          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .project-card:hover .project-overlay {
            opacity: 1;
          }
        `}</style>
      </Container>
    </div>
  );
};

export default ProjectsPage;
