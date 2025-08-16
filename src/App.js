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
    id: 'skyscraper',
    title: 'residential compound',
    description: 'A thoughtfully planned residential compound that blends privacy with communal connectivity. The design features clusters of modern villas and low-rise apartments arranged around shared green spaces, pedestrian pathways, and recreational amenities. Neutral-toned facades with timber accents create warmth, while large windows and terraces encourage indoor-outdoor living. Landscaped courtyards, swimming pools, and a central clubhouse foster social interaction, making it an ideal balance of serenity and vibrancy.',
    image: exx1,
    
  },
   {
    id: 'skyscraper',
    title: 'Building R',
    description: 'Building R redefines city skylines with its bold, geometric form and dynamic mixed-use program. Combining retail, office, and co-living spaces, its façade alternates between glass curtain walls and textured metal panels, creating rhythm and depth. Setbacks at higher levels provide terraced gardens, offering occupants green retreats with panoramic views. The ground floor features a double-height atrium and vibrant street-facing cafés, activating the urban fabric.',
    image: exx2,
    
  },
   {
    id: 'skyscraper',
    title: 'Tower s1',
    description: 'A soaring residential Tower S1 epitomizes vertical elegance with its slender profile and shimmering glass-and-steel exterior. The façade’s vertical fins reduce solar glare while creating a striking visual identity. Sky lobbies and cantilevered balconies provide residents with breathtaking cityscape vistas. The podium includes a landscaped plaza with water features, seamlessly connecting the tower to its downtown context.',
    image: exx3,

  },
  {
    id: 'eco-housing',
    title: 'Villa RV',
    description: 'Villa RV is a minimalist retreat nestled in an arid landscape, designed to embrace extreme climates. Its low-slung, horizontal form features rammed earth walls for thermal mass and deep overhangs for shade. A central courtyard with a reflective pool acts as a cooling microclimate, while floor-to-ceiling sliding glass walls blur boundaries between interior and exterior. The muted material palette (sand-toned concrete, oxidized steel) mirrors the desert’s natural hues.',
    image: exx4,
  },
  {
    id: 'urban-revitalization',
    title: 'LS V Interior',
    description: 'Strategic urban planning to breathe new life into a historic city center. Our plan involved restoring historic buildings, creating pedestrian-friendly zones, and introducing new public art installations. The project has successfully revitalized the downtown area, attracting new businesses and becoming a cultural hub for the city.',
    image: innt1,
  },
  {
    id: 'library-design',
    title: 'RY Interior',
    description: 'A bold transformation of a raw industrial space into a vibrant loft, RY Interior celebrates exposed textures—concrete ceilings, steel beams, and brick walls—balanced with curated modernity. The open-plan living area features a monolithic kitchen island in matte black, contrasting with vintage leather sofas and a gallery wall of street art. Strategic track lighting highlights architectural details, creating a dynamic interplay of shadow and form.',
    image: innt2,
  },
   {
    id: 'library-design',
    title: 'YS Interior',
    description: 'YS Interior embodies the principles of Scandinavian minimalism—clean lines, functionality, and warmth. Designed for a creative studio, the space uses a neutral base (white walls, pale wood floors) punctuated by playful geometric lighting and modular furniture. Built-in shelving doubles as display space for inspirational objects, while ergonomic seating ensures productivity. The deliberate absence of clutter fosters focus and creativity.',
    image: innt3,
  },
   {
    id: 'library-design',
    title: 'SR Interior',
    description: 'A refined blend of contemporary elegance and timeless comfort, SR Interior redefines urban living with a focus on bespoke craftsmanship. The space features a muted yet rich palette—soft taupe walls, brushed brass accents, and custom millwork in warm oak. Floor-to-ceiling windows flood the interiors with natural light, while curated art pieces and sculptural lighting add depth. Smart home integration ensures seamless functionality, making this a sanctuary of understated luxury.',
    image: innt4,
  }
];


// --- RevealOnScroll Component ---
// This component adds a fade-in animation when a component scrolls into view.
const RevealOnScroll = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Check if the element is intersecting (in view)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
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

// --- Navbar Component ---
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
            Founded in 2024, our firm began with a simple mission: to create architecture that is both beautiful and meaningful. Over the years, we have grown into a leading firm known for our commitment to sustainability, client collaboration, and bold, modern design. Our work has been recognized with numerous industry awards, and we continue to push the boundaries of what is possible.
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
    width: '50px',       // Adjust size as needed
    height: '50px',
    objectFit: 'contain' ,// Preserves aspect ratio
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
    width: '50px',       // Adjust size as needed
    height: '50px',
    objectFit: 'contain' ,// Preserves aspect ratio
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

// --- New Projects List Page Component ---
const ProjectsListPage = ({ onSelectProject, onBack }) => (
  // Removed mt-5 and pt-5 to remove the gap at the top
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

// --- New Project Detail Component ---
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
    // Removed mt-5 and pt-5 to remove the gap at the top
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


// --- Team Section ---
// In App.js
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Ali Chaer',
      title: 'Architect',
      image: Ali,
      position: 'center 25%' // Adjust to show face properly
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
// --- Contact Section ---
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

// --- Footer Component ---
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
      {/* Conditionally render the Navbar only on the 'home' page */}
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
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
      {/* Custom CSS for a better look and feel */}
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

