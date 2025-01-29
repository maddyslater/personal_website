import { faGamepad, faSearch, faCodeBranch, faCloud, faHamburger } from '@fortawesome/free-solid-svg-icons';

const ProjectItems = [
    {
        id: 1,
        title: 'Interactive Nuggets Game',
        icon: faGamepad,
        date: 'May 2024',
        description: 'Designed and implemented the client-server architecture for Nuggets , a procedurally generated multiplayer exploration game, utilizing secure communication protocols and real-time updates.',
        access: false
    },

    {
        id: 2,
        title: 'Tiny Search Engine',
        icon: faSearch,
        date: 'April 2024',
        description: 'Developed a Linux command-line search engine in C with a web crawler, page indexer, and ranking-based querier.',
        access: false
    },

    {
        id: 3,
        title: 'Huffman Encoding',
        icon: faCodeBranch,
        date: 'May 2023',
        description: 'Developed a Huffman encoding and decoding program in Java, using binary trees and priority queues for efficient text compression.',
        access: false
    },

    {
        id: 4,
        title: 'Amazon Cloud Project',
        icon: faCloud,
        date: 'July 2024',
        description: 'Created a mini-cloud environment and worked to secure AWS S3 bucket by restricting public access authorizing users. Implemented bucket policies, VPC endpoint policies, while preserving read permissions for public users.',
        access: true,
        link: 'https://github.com/annabellawu/COSC55/wiki'
    },

    {
        id: 5,
        title: 'DartGrub',
        icon: faHamburger,
        date: 'July 2024',
        description: 'Developed a food blog with a Firebase backend, enabling users to share reviews, ratings, and restaurant recommendations with real-time data storage and retrieval.',
        access: true,
        link: 'https://github.com/maddyslater/food-blog'
    },
]

export default ProjectItems;
