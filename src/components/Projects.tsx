import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dashboard from '../images/dashboard.png';
import zonecam from '../images/zonecam.png';
import mndl from '../images/mandela.png';

const projectsData = [
  {
    title: 'Cordin8',
    description: 'A task managing  and feedbackweb application.',
    image: dashboard,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
    github: 'https://github.com/wemmy6673/project1',
    live: ''
  },
  {
    title: 'Zonecam',
    description: 'An AI-powered Geopolitical zone prediction web application.',
    image: zonecam,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Python'],
    github: 'https://github.com/wemmy6673/Zonecam',
    live: 'https://zonecam.vercel.app/'
  },
  {
    title: 'Mndl',
    description: 'The Mandela Effect is a phenomenon where large groups of people remember events differently than how they actually occurred',
    image: mndl,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
    github: 'https://github.com/wemmy6673/mandela',
    live: 'https://mndl.fun/'
  }
  
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {projectsData.map((project, index) => (
              <div key={project.title} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="h-64 bg-gray-700 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-justify">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects; 