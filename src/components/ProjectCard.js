import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, category, image } = project;

  return (
    <Card className="project-card h-100 border-0 shadow-lg overflow-hidden position-relative">
      <Card.Img variant="top" src={image} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body className="bg-secondary text-light">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{category.replace('-', ' ')}</Card.Text>
        <div className="project-overlay d-flex align-items-center justify-content-center">
          <Button variant="primary" className="rounded-pill">
            View Project <FaLink className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
