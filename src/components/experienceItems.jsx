import Dartmouth from '../assets/dmouth.png'
import HardScrabble from '../assets/hardscrabble.png'
import Skipa from '../assets/skipa.png'
import Teds from '../assets/teds.png'
import Tuck from '../assets/tuck.png'

const ExperienceItems = [
    {
        key: 1,
        title:'Banking Analyst',
        company:'Tuck Advisors',
        image:Tuck,
        location:'Hanover, NH',
        date: 'Fall 2024', 
        description: 'Conducted financial analysis, valuation modeling, and market research to support M&A transactions. Assisted in deal execution, due diligence, and sourcing, while collaborating with senior bankers.'
    },
    {
        key: 2,
        title:'Student Patroller',
        company:'Dartmouth Ski Patrol',
        image:Skipa,
        location:'Hanover, NH',
        date: 'September 2022 - Present',
        description: 'CPR and OEC certified technician responsible for responding quickly to emergencies and delivering essential medica services at the local Dartmouth Skiway!'
    },
    {
        key: 3,
        title:'Teaching Assistant',
        company:'Dartmouth College Department of Computer Science',
        image:Dartmouth,
        location:'Hanover, NH',
        date: 'September 2023 - December 2024',
        description: 'Provided hands-on support in Python programming and frontend /development (HTML, CSS, JavaScript, React) by assisting students with coding exercises, debugging, and project development.'
    },
    {
        key: 4,
        title:'Business Development Intern',
        company:'Hardscrabble Ranch',
        image:HardScrabble,
        location:'Bozeman, MT',
        date: 'June 2023 - August 2023',
        description: 'Conducted comprehensive market research to expand corporate event opportunities by identifying prospective clients and executing strategic outreach to assess their business needs, preferences, and evaluate partnership potential'
    },
    {
        key: 5,
        title:'Hostess',
        company:"Ted Montana Grill",
        image:Teds,
        location:'Bozeman, MT',
        date: 'June 2023 - August 2023',
        description: 'Managed and organized all guest bookings, ensuring system accuracy and tailoring arrangements to accommodate guest preferences and avoid worker overload'
    },
];

export default ExperienceItems;