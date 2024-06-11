import { faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import Resume from '../assets/resume.pdf'

const ContactItems = [
    {
        type: 'email',
        icon: faEnvelope,
        target: 'mailto:madeline.g.slater.26@dartmouth.edu',
        title: 'Email me!',
    },
    {
        type: 'github',
        icon: faGithubSquare,
        target: 'https://github.com/maddyslater',
        title: 'Github',
    },
    {
        type: 'linkedin',
        icon: faLinkedin,
        target: 'https://linkedin.com/in/madelineslater',
        title: "Linkedin",
    },
    {
        type: 'resume',
        icon: faIdCard,
        target: Resume,
        title: 'Resume',
    },
];

export default ContactItems;