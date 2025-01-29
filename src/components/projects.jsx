import '../stylesheet.css';
import projectItems from './projectItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const handleCardClick = (project) => {
        setActiveProject(project);
    };

    const closeModal = () => {
        if (activeProject != null) {
            setActiveProject(null);
        }
    };

    return (
        <div>
            <h1 className='component-header'>Projects</h1>
            <h2 className='component-subheader'>Click to Learn More!</h2>
            <div className='project-container'>
                {projectItems.map((project, index) => (
                    <div key={index} className="projectCard" onClick={() => handleCardClick(project)}>
                        <FontAwesomeIcon icon={project.icon} className="project-icon" />
                    </div>
                ))}
            </div>

            {activeProject && (
                <div className="modal-container active" onClick={closeModal}>
                    <div className="modal-content">
                        <h1>{activeProject.title}</h1>
                        <h2>{activeProject.date}</h2>
                        <p>{activeProject.description}</p>
                        {activeProject.link && <a className="button-43" href={activeProject.link}>Check it out here!</a>}
                        {!activeProject.access && <a className="button-43" href="mailto:madeline.g.slater.26@dartmouth.edu">Email Me For Access!</a>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
