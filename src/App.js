import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaArrowUp, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp} from 'react-icons/fa';
import exx1 from './assets/images/exx1.jpg';
import exx2 from './assets/images/exx2.jpg';
import exx3 from './assets/images/exx3.jpg';
import exx4 from './assets/images/exx4.jpg';
import innt1 from './assets/images/innt1.jpg';
import innt2 from './assets/images/innt2.jpg';
import innt3 from './assets/images/innt3.jpg';
import innt4 from './assets/images/innt4.jpg';
//import libraryImage1 from './assets/library-1.jpg';
//import libraryImage1 from './assets/library-1.jpg';
import HomePage from './pages/Home';
import TeamMember from './components/TeamMember';
import ext from './assets/images/Homee.png';
import int from './assets/images/int1.png';
import plan from './assets/images/ex1.png';
import about from './assets/images/Aboutus.jpg';
import Ali from './assets/images/Ali.jpg';
import Saja from './assets/images/Saja.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// The corrected import statement using the relative path from App.js to the image file.
import heroImage from './assets/images/vent.png';

// --- Placeholder image URLs for other sections ---
const teamMember1 = Ali;
const teamMember2 = Saja;

// --- Project Data (for demonstration purposes) ---
const projectsData = [
  {
    id: 'skyscraper1',
    title: 'residential compound',
    description: 'A modern residential compound featuring clean lines, floating volumes, and a bold architectural form. The landscape is designed with stepped levels, greenery to create a balanced and inviting outdoor space that enhances the overall experience.',
    image: exx1,
    
  },
   {
    id: 'skyscraper2',
    title: 'Building R',
    description: 'This project explores the balance between bold geometric volumes and natural integration. The design emphasizes layered facades, deep frames, and material contrast to create visual rhythm and spatial depth. With generous balconies, dynamic shadows, and integrated greenery, the architecture promotes openness and connection to the outdoors.',
    image: exx2,
    
  },
   {
    id: 'skyscraper3',
    title: 'Tower s1',
    description: 'This tower project, located in Saudi Arabia, was designed with a deep sensitivity to the region’s harsh climate and environmental conditions. The architectural approach focuses on performance and resilience, featuring carefully studied openings and strategically placed metal louvres that optimize natural ventilation, reduce solar gain, and enhance the building’s visual identity. The result is a bold, climate-responsive form that blends functionality with refined contemporary expression.',
    image: exx3,

  },
  {
    id: 'eco-housing',
    title: 'Villa RV',
    description: 'This new villa project shows a clean, modern architectural language with sharp volumes, generous glazing, and a seamless indoor-outdoor relationship. The design emphasizes openness and elegance, using light tones and warm materials to enhance natural light. The outdoor space, including a pool and landscaped areas, integrates effortlessly with the architecture, creating a serene yet sophisticated environment.',
    image: exx4,
  },
  {
    id: 'urban-revitalization',
    title: 'LS V Interior',
    description: 'LS Villa is a minimalist interior design project located in Abbasieh, South Lebanon. Focused on simplicity, functionality, and clean modern lines, the design offers calm, open spaces tailored for everyday living.',
    image: innt1,
  },
  {
    id: 'library-design1',
    title: 'RY Interior',
    description: 'This interior design project, located in North Lebanon  reflects a modern and highly functional approach tailored to the client’s lifestyle. The design combines sleek lines and smart spatial organization with a rich palette of dark and nude tones, creating a bold yet balanced atmosphere. Each space was crafted to feel contemporary, comfortable, and practical.',
    image: innt2,
  },
   {
    id: 'library-design2',
    title: 'YS Interior',
    description: 'This interior project in Jbeil was designed with a focus on modern functionality, tailored to the client’s needs. A rich palette of dark and nude tones adds depth and warmth, while clean lines and thoughtful layouts create a sleek, practical living environment.',
    image: innt3,
  },
   {
    id: 'library-design3',
    title: 'SR Interior',
    description: 'This project features a clean, open space that combines the dining area, staircase, and living room into one cohesive layout. The design emphasizes simplicity, flow, and light—creating a welcoming and modern shared zone at the heart of the villa.',
    image: innt4,
  }
];

const RevealOnScroll = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    fetch('https://vent-ijwk.onrender.com/log-visitor')
     .then(res => res.text())
     .then(console.log)
     .catch(console.error);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); 
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`reveal-on-scroll fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const Navbar = ({ onNavigate }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <Container>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {['about', 'services', 'team', 'contact'].map(section => (
            <li key={section} className="nav-item">
              <ScrollLink
                className="nav-link"
                to={section}
                smooth={true}
                duration={500}
                offset={-56}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={() => onNavigate('projects-list')}>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
);

const HeroSection = () => (
  <header
    id="hero"
    className="hero-section text-center d-flex align-items-center justify-content-center"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
 <div 
  className="d-flex flex-column align-items-center justify-content-start p-5" 
  style={{ 
    backgroundColor: 'transparent',
    minHeight: '100vh',
    paddingTop: '100px', 
    marginBottom:'4rem'
  }}
>
  <h1 className="hero-heading" style={{paddingTop:'45px'}}>Vent Architecture</h1>
  <h1 
    className="hero-subheading" 
    style={{
      color: '#EEEEEE',
      fontSize: '1.5rem',
      fontWeight: '800',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      marginTop: '1rem',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
    }}
  >
    Timeless innovation
  </h1>
</div>
  </header>
);

const AboutSection = () => (
  <section id="about" className="py-5" style={{backgroundColor:'#eeeeee'}}>
    <Container>
      <RevealOnScroll>
        <div className="text-center mb-5">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">Building a legacy of excellence and innovation.</p>
        </div>
      </RevealOnScroll>
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image src={about} fluid rounded />
        </Col>
        <Col md={6}>
          <p className="about-text">
  <span>Vent is an independent architectural and design studio founded by Saja Tarshishi and Ali Chaer.</span>
  <span>Inspired by the idea of "ventilation" as a window to the world, Vent is a platform that opens space for fresh perspectives in architecture.</span>
  <span>We focus on creating thoughtful, functional, and timeless designs — from intimate interiors to large-scale developments.</span>
  <span>Through our work, we aim to craft spaces that breathe, connect, and inspire.</span>
</p>
        </Col>
      </Row>
    </Container>
  </section>
);

// --- Services Section ---
const ServicesSection = () => (
  <section id="services" className="py-5 bg-light">
    <Container>
      <RevealOnScroll>
        <div className="text-center mb-5">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Solutions tailored to meet your unique business needs.</p>
        </div>
      </RevealOnScroll>
      <Row className="g-4 d-flex align-items-stretch">
        <Col md={4}>
          <RevealOnScroll>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <img 
  src={ext} 
  alt="Service icon" 
  className="service-icon"
  style={{
    width: '35px',       
    height: '50px',
    objectFit: 'contain' ,
    backgroundColor: 'transparent'
  }}
/>
                <Card.Title className="fw-bold">Exterior Design</Card.Title>
                <Card.Text>Full-scope design from concept to construction, ensuring quality and innovation.</Card.Text>
              </Card.Body>
            </Card>
          </RevealOnScroll>
        </Col>
        <Col md={4}>
          <RevealOnScroll>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <img
                src={int} 
  alt="Service icon" 
  className="service-icon"
  style={{
    width: '50px',      
    height: '50px',
    objectFit: 'contain' ,
    backgroundColor: 'transparent'
  }}
/>
                <Card.Title className="fw-bold">Interior Design</Card.Title>
                <Card.Text>Integrating eco-friendly practices to create energy-efficient and healthy buildings.</Card.Text>
              </Card.Body>
            </Card>
          </RevealOnScroll>
        </Col>
        <Col md={4}>
          <RevealOnScroll>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
               <img 
  src={plan} 
  alt="Service icon" 
  className="service-icon"
  style={{
    width: '50px',      
    height: '50px',
    objectFit: 'contain' ,
    backgroundColor: 'transparent'
  }}
/>
                <Card.Title className="fw-bold">Construction plans</Card.Title>
                <Card.Text>Strategic planning for creating dynamic and functional urban spaces.</Card.Text>
              </Card.Body>
            </Card>
          </RevealOnScroll>
        </Col>
      </Row>
    </Container>
  </section>
);

// --- Projects Section (on Home Page) ---
const ProjectsSection = ({ onNavigate }) => (
  <section id="projects" className="py-5">
    <Container className="text-center">
      <RevealOnScroll>
        <div className="text-center mb-5">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">A showcase of our best work.</p>
        </div>
        <Button
          onClick={() => onNavigate('projects-list')}
          size="lg"
          style={{ backgroundColor: '#2c2c2c', borderColor: '#2c2c2c', color: 'white' }}
        >
          View All Projects
        </Button>
      </RevealOnScroll>
    </Container>
  </section>
);
const ProjectsListPage = ({ onSelectProject, onBack }) => (
  <section className="py-5">
    <Container>
      <Button onClick={onBack} variant="secondary" className="mb-4">Back to Home</Button>
      <div className="text-center mb-5">
        <h2 className="section-title">All Our Projects</h2>
        <p className="section-subtitle">Explore our portfolio of innovative designs.</p>
      </div>
      <Row className="g-4 d-flex align-items-stretch">
        {projectsData.map((project, index) => (
          <Col md={4} key={index}>
            <RevealOnScroll>
              <Card 
                className="h-100 shadow-sm project-card"
                onClick={() => onSelectProject(project.id)}
              >
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>
                    {project.description.split('.')[0]}.
                  </Card.Text>
                </Card.Body>
              </Card>
            </RevealOnScroll>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const ProjectDetail = ({ projectId, onBack }) => {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) {
    return (
      <Container className="py-5 text-center">
        <h2>Project not found!</h2>
        <Button onClick={onBack} variant="primary" className="mt-3">Go Back</Button>
      </Container>
    );
  }
  return (
    <section className="py-5">
      <Container>
        <Button onClick={onBack} variant="primary" className="mb-3 btn btn-custom btn-custom-gray mt-auto">Go Back to Projects</Button>
        <h2 className="section-title text-center mb-4">{project.title}</h2>
        <Image src={project.image} fluid rounded className="mb-4" />
        <p className="project-detail-text">
          {project.description}
        </p>
      </Container>
    </section>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Ali Chaer',
      title: 'Architect',
      image: Ali,
      position: 'center 25%' 
    },
    {
      name: 'Saja Tarchichi',
      title: 'Architect',
      image: Saja,
      position: 'center 30%'
    }
  ];
  return (
    <section id="team" className="py-5 bg-light">
      <Container>
        <RevealOnScroll>
          <div className="text-center mb-5">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">Passionate experts dedicated to your success.</p>
          </div>
        </RevealOnScroll>
        <Row className="g-4 justify-content-center">
          {teamMembers.map((member, i) => (
            <Col md={6} lg={4} key={i}>
              <RevealOnScroll>
                <Card className="h-100 text-center shadow-sm p-3">
                  <TeamMember 
                    image={member.image}
                    name={member.name}
                    title={member.title}
                    position={member.position}
                  />
                </Card>
              </RevealOnScroll>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-5">
    <Container>
      <RevealOnScroll>
        <div className="text-center mb-5">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Contact us through your preferred method below.</p>
        </div>
      </RevealOnScroll>
      <Row className="g-4 justify-content-center d-flex align-items-stretch">
        <Col md={4}>
          <RevealOnScroll>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center">
                <FaEnvelope size="4em" className="text-primary mb-3" />
                <Card.Title>Email</Card.Title>
                <Card.Text>Send us an email directly.</Card.Text>
                <a href="mailto:contact@mybusiness.com" className="btn btn-custom btn-custom-gray btn-lg mt-auto">
                  Send Email
                </a>
              </Card.Body>
            </Card>
          </RevealOnScroll>
        </Col>
        <Col md={4}>
          <RevealOnScroll>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center">
                <FaWhatsapp size="4em" className="text-success mb-3" />
                <Card.Title>WhatsApp</Card.Title>
                <Card.Text>Start a chat with our team.</Card.Text>
                <a href="https://wa.me/96170898982" target="_blank" rel="noopener noreferrer" className="btn btn-custom btn-custom-gray btn-lg mt-auto">
                  Start Chat
                </a>
              </Card.Body>
            </Card>
          </RevealOnScroll>
        </Col>
        <Col md={4}>
          <RevealOnScroll>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center">
                <FaInstagram size="4em" className="text-danger mb-3" />
                <Card.Title>Instagram</Card.Title>
                <Card.Text>Follow us and send a DM.</Card.Text>
                <a href="https://www.instagram.com/vent.arch?igsh=MTViNXB6Y2lneHlrYg==" target="_blank" rel="noopener noreferrer" className="btn btn-custom btn-custom-gray btn-lg mt-auto">
                  Visit Profile
                </a>
              </Card.Body>
            </Card>
          </RevealOnScroll>
        </Col>
        <Col md={4}>
          <RevealOnScroll>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center">
                <FaLinkedin size="4em" className="text-primary mb-3" />
                <Card.Title>Linkedin</Card.Title>
                <Card.Text>Follow for insights—DM to connect</Card.Text>
                <a href="https://www.linkedin.com/in/vent-architecture-7a5632378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="btn btn-custom btn-custom-gray btn-lg mt-auto">
                  Connect with us
                </a>
              </Card.Body>
            </Card>
          </RevealOnScroll>
        </Col>
      </Row>
    </Container>
  </section>
);
const Footer = () => (
  <footer className="bg-dark text-white text-center py-4">
    <Container>
      <p className="mb-0 footer">
        © {new Date().getFullYear()} All Rights Reserved.<br/>
        Developed and designed by Hussein Rachid
      </p>
    </Container>
  </footer>
);

export default function App() {
  const scrollTop = () => scroll.scrollToTop({ smooth: true, duration: 500 });
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
    localStorage.setItem('darkMode', !darkMode);
  };
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.setAttribute('data-theme', savedMode ? 'dark' : 'light');
  }, []);
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection onNavigate={setCurrentPage} />
            <TeamSection />
            <ContactSection />
          </main>
        );
      case 'projects-list':
        return <ProjectsListPage onSelectProject={setCurrentPage} onBack={() => setCurrentPage('home')} />;
      default:
        return <ProjectDetail projectId={currentPage} onBack={() => setCurrentPage('projects-list')} />;
    }
  };

  return (
    <> 
      {currentPage === 'home' &&  <Navbar onNavigate={setCurrentPage} />}
      {renderContent()}
      <Footer />
      <Button
        id="scroll-to-top"
        onClick={scrollTop}
        className="scroll-to-top-btn"
        variant="light"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </Button>
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          scroll-behavior: smooth;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: 700;
        }
        .hero-section {
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .hero-heading {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }
        .hero-subheading {
          font-size: 1.25rem;
          font-weight: 300;
        }
        @media (min-width: 768px) {
          .hero-heading {
            font-size: 5rem;
          }
          .hero-subheading {
            font-size: 1.5rem;
          }
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
        }
        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #495057;
        }
        .service-icon {
          font-size: 3.5rem;
          color: #007bff;
          margin-bottom: 1rem;
        }
        .team-img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border: 4px solid #fff;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }
        .scroll-to-top-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 1000;
          transition: transform 0.3s ease;
        }
        .scroll-to-top-btn:hover {
          transform: translateY(-5px);
        }
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .btn-custom {
          padding: 10px 20px;
          border-radius: 50px;
          text-transform: uppercase;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .btn-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .btn-custom-gray {
          background-color: #2c2c2c;
          border-color: #2c2c2c;
          color: white;
        }
        .project-card {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0,0,0,0.15);
        }
        .project-detail-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #495057;
        }
      `}</style>
    </>
  );
}

