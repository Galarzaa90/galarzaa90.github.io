import { faGithub, faGitlab, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SimpleIcon } from 'simple-icons';
const python: SimpleIcon = require('simple-icons/icons/python');
const mysql: SimpleIcon = require('simple-icons/icons/mysql');
const csharp: SimpleIcon = require('simple-icons/icons/csharp');
const azurefunction: SimpleIcon = require('simple-icons/icons/azurefunctions');
const microsoftsqlserver: SimpleIcon = require('simple-icons/icons/microsoftsqlserver');
const django: SimpleIcon = require('simple-icons/icons/django');
const xamarin: SimpleIcon = require('simple-icons/icons/xamarin');
const nodejs: SimpleIcon = require('simple-icons/icons/node-dot-js');
const kotlin: SimpleIcon = require('simple-icons/icons/kotlin');
const android: SimpleIcon = require('simple-icons/icons/android');
const java: SimpleIcon = require('simple-icons/icons/java');
const arduino: SimpleIcon = require('simple-icons/icons/arduino');
const raspberrypi: SimpleIcon = require('simple-icons/icons/raspberrypi');
const cplusplus: SimpleIcon = require('simple-icons/icons/cplusplus');
const angularjs: SimpleIcon = require('simple-icons/icons/angularjs');
const angular: SimpleIcon = require('simple-icons/icons/angular');
const electron: SimpleIcon = require('simple-icons/icons/electron');
const javascript: SimpleIcon = require('simple-icons/icons/javascript');
const typescript: SimpleIcon = require('simple-icons/icons/typescript');
const postgresql: SimpleIcon = require('simple-icons/icons/postgresql');
const socketio: SimpleIcon = require('simple-icons/icons/socket-dot-io');
const redis: SimpleIcon = require('simple-icons/icons/redis');
const ubuntu: SimpleIcon = require('simple-icons/icons/ubuntu');
const sqlite: SimpleIcon = require('simple-icons/icons/sqlite');
const singlestore: SimpleIcon = require('simple-icons/icons/singlestore');
const swagger: SimpleIcon = require('simple-icons/icons/swagger');
const aiohttp: SimpleIcon = require('simple-icons/icons/aiohttp');

interface Profile {
    headline: string;
    aboutMe: string;
    location: string;
    languages: Array<Language>;
    onlineProfiles: Array<OnlineProfile>;
    interests: Array<string>;
    workExperience: Array<JobEntry>;
    education: Array<School>;
    projects: Array<Project>;
    skills: Array<Skill>;
}

interface Language {
    name: string;
    level: string;
}

interface OnlineProfile {
    icon: IconDefinition;
    url: string;
    title: string;
}

export interface JobEntry {
    company: string;
    start: Date;
    end?: Date;
    logo?: string;
    url?: string;
    position: string;
    description?: string;
    items?: Array<string>;
    skills?: Array<SkillIcon>;
}

export interface School {
    name: string;
    start: Date;
    end?: Date;
    level: string;
    title: string;
    logo: string;
}

export interface Project {
    name: string;
    url: string;
    start: Date;
    end?: Date;
    logo?: string;
    description: string;
    items?: Array<string>;
    skills: Array<SkillIcon>;
}

interface Skill {
    name: string;
    type: string;
}
export interface SkillIcon {
    icon: SimpleIcon;
    text: string;
}

const icons = {
    python: {
        icon: python,
        text: 'Python'
    },
    mysql: {
        icon: mysql,
        text: 'MySQL'
    },
    csharp: {
        icon: csharp,
        text: 'C#'
    },
    azurefunctions: {
        icon: azurefunction,
        text: 'Azure Functions'
    },
    mssql: {
        icon: microsoftsqlserver,
        text: 'Microsoft SQL Server'
    },
    xamarin: {
        icon: xamarin,
        text: 'Xamarin'
    },
    django: {
        icon: django,
        text: 'Django'
    },
    kotlin: {
        icon: kotlin,
        text: 'Kotlin'
    },
    nodejs: {
        icon: nodejs,
        text: 'NodeJS'
    },
    android: {
        icon: android,
        text: 'Android'
    },
    java: {
        icon: java,
        text: 'Java'
    },
    raspberrypi: {
        icon: raspberrypi,
        text: 'Raspberry Pi'
    },
    cplusplus: {
        icon: cplusplus,
        text: 'C++'
    },
    arduino: {
        icon: arduino,
        text: 'Arduino'
    },
    angularjs: {
        icon: angularjs,
        text: 'AngularJS'
    },
    javascript: {
        icon: javascript,
        text: 'JavaScript'
    },
    electron: {
        icon: electron,
        text: 'Electron'
    },
    postgresql: {
        icon: postgresql,
        text: 'PostgreSQL'
    },
    angular: {
        icon: angular,
        text: 'Angular'
    },
    socketio: {
        icon: socketio,
        text: 'Socket.IO'
    },
    ubuntu: {
        icon: ubuntu,
        text: 'Ubuntu'
    },
    redis: {
        icon: redis,
        text: 'Redis'
    },
    sqlite: {
        icon: sqlite,
        text: 'SQLite'
    },
    typescript: {
        icon: typescript,
        text: 'TypeScript'
    },
    singlestore: {
        icon: singlestore,
        text: 'SingleStore (previously MemSQL)'
    },
    swagger: {
        icon: swagger,
        text: 'Swagger'
    },
    aiohttp: {
        icon: aiohttp,
        text: 'aiohttp'
    }
};

export let profile: Profile = {
    headline: 'Hello, my name is Allan!',
    aboutMe: 'I\'m a mechatronics engineer and software developer. I\'m mainly a backend developer, my favorite is Python. I love electronics, gaming and learning new things.',
    location: 'Mexico',
    languages: [
        {
            name: 'Spanish',
            level: 'Native'
        },
        {
            name: 'English',
            level: 'Professional'
        },
        {
            name: 'Portuguese',
            level: 'Basic'
        }
    ],
    onlineProfiles: [
        {
            icon: faEnvelope,
            url: 'mailto:allan.galarza@gmail.com',
            title: 'Email'
        },
        {
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/galarzaa/',
            title: 'LinkedIn'
        },
        {
            icon: faGithub,
            url: 'https://github.com/Galarzaa90',
            title: 'GitHub'
        },
        {
            icon: faGitlab,
            url: 'https://gitlab.com/Galarzaa90',
            title: 'GitLab'
        }
    ],
    interests: [
        'Electronics',
        'Internet of Things',
        'Gaming',
        'PC Building'
    ],
    workExperience: [
        {
            company: 'Encora',
            start: new Date('2020-11-09'),
            logo: 'Encora.png',
            url: 'https://www.encora.com',
            position: 'Software Engineer',
            description: 'Previously known as Nearsoft. Working as a backend developend, at the moment focusing in Python.',
            items: [
                'API Design and development.'
            ],
            skills: [
                icons.python, icons.swagger, icons.aiohttp, icons.singlestore
            ]
        },
        {
            company: 'Joybyte',
            start: new Date('2020-06-15'),
            end: new Date('2020-10-31'),
            url: 'https://www.joybyte.com/',
            position: 'Freelancer Developer',
            logo: 'joybyte.png',
            description: 'Supported the backend team off-hours with the development of a new release for a mobile pregnancy tracking app.',
            items: [
                'Design of APIs for mobile consumers.',
                'Database First design and management.',
                'Design and maintenance of stored procedures and other database logic.',
            ],
            skills: [
                icons.csharp, icons.azurefunctions, icons.mssql
            ]
        },
        {
            company: 'Gila Software',
            start: new Date('2019-05-13'),
            end: new Date('2020-10-27'),
            url: 'https://gilasw.com/',
            position: 'Software Engineer',
            logo: 'GilaSW.png',
            description: 'Worked on multiple projects for multiple clients as part of the backend development team, following scrum methdology',
            items: [
                'Development of the backend for a web application to manage dynamically generated inspections and inventory. From the design of the database, to development of the microservice and orchestrator layer.',
                'Development of the backend of a multiplatform mobile app for fire & security inspections, including API development as well as application features and logic.',
                'Development of a mobile social media platform for entrepeneurs and startups.',
                'Maintenance of a booking and travel CMS.'
            ],
            skills: [
                icons.csharp, icons.azurefunctions, icons.mssql, icons.xamarin, icons.python, icons.django
            ]
        },
        {
            company: 'LyF Ingeniería',
            start: new Date('2018-01-16'),
            end: new Date('2019-05-17'),
            position: 'Software Engineer',
            logo: 'LYF.png',
            url: 'https://lopez-fernandez.com/',
            description: 'Development of applications and libraries for money management devices.',
            items: [
                'Creation of applications for end-users, deployed in kiosks with multiple money devices.',
                'Design and development of software interfaces for acceptors, dispensers and other money devices.',
                'Integration to third-party monitoring web services.',
                'Integration to third party banking and payment services.',
                'Development and management of web services.',
                'Management of local and remote databases.',
                'Implementation of quality coding practices.',
                'Temporary outsourced at Qualisys to aid in development of SAP Business One addons.'
            ],
            skills: [
                icons.csharp, icons.nodejs, icons.kotlin, icons.raspberrypi, icons.angularjs, icons.electron
            ]
        },
        {
            company: 'i3',
            start: new Date('2015-06-12'),
            end: new Date('2017-12-31'),
            position: 'Innovation Development Engineer',
            description: 'Development of innovation oriented projects in different areas. My work was focused on electronics, microcontrollers and software.',
            items: [
                'Creation of an Android app that uses Bluetooth LE technology to communicate with an embedded device controlling headlights on ATV vehicles.',
                'Design and manufacturing of protective cases for electronic control devices.',
                'Development of an Android app to remotely monitor ambient conditions of Aquaponic greenhouses.',
                'Development and implementation of a small Linux based server providing greenhouse sensors data to client devices.'
            ],
            skills: [
                icons.android, icons.java, icons.cplusplus, icons.arduino
            ]
        },
        {
            company: 'Universidad de Sonora',
            start: new Date('2015-03-01'),
            end: new Date('2020-05-01'),
            position: 'Technical Manager Assistant',
            logo: 'UNISON.png',
            url: 'https://www.unison.mx/',
            description: 'Assisting the technical manager and planning of the project: <i>Feasibility study of photovoltaic cells for airport gas stations electricity supply</i>.',
            items: [
                'Implementation of solar tracking algorithms in microcontroller based systems.',
                'Design of printed circuit boards.',
                'Design of solar tracking mechanical structures for photovoltaic cells.'
            ],
            skills: [
                icons.android, icons.java, icons.cplusplus, icons.arduino
            ]
        },
        {
            company: 'Grupo TEPEI',
            start: new Date('2014-06-01'),
            end: new Date('2014-11-01'),
            position: 'Developer',
            description: 'Developing of an energy saving control system, focused on school classrooms, based on configurable schedules obtained from a server.',
            skills: [
                icons.cplusplus, icons.arduino, icons.java, icons.android
            ]
        },
        {
            company: 'Plataforma Solar de Hermosillo',
            start: new Date('2014-01-01'),
            end: new Date('2014-06-01'),
            logo: 'PSH.png',
            url: 'http://psh.isi.uson.mx/',
            position: 'Intern Developer',
            description: 'Developing an alternative control system for Heliostats solar tracking. A economic and open platform using Arduino, as an alternative to the private systems using CompactRIO by National Instruments.',
            skills: [
                icons.cplusplus, icons.arduino
            ]
        }
    ],
    education: [
        {
            name: 'Universidad de Sonora',
            start: new Date('2009-08-01'),
            end: new Date('2014-04-01'),
            level: 'Bachelor\s Degree',
            title: 'Mechatronics Engineering (Ingeniería Mecatrónica)',
            logo: 'UNISON.png',
        },
        {
            name: 'CBTis 11',
            start: new Date('2006-08-01'),
            end: new Date('2009-06-01'),
            level: 'High School Diploma',
            title: 'Specialization in Mechatronics',
            logo: 'cbtis11.png'
        }
    ],
    projects: [
        {
            name: 'NabBot',
            url: 'https://nabbot.xyz',
            start: new Date('2016-03-02'),
            logo: 'NabBot.png',
            description: 'Discord bot focused on the MMO Tibia. An interactive bot that answers to different commands, handles a user database and does realtime updates based on game events.',
            items: [
                'In over 8,000 Discord servers.',
                'Over 10,000 monthly users.',
                'Recognized as a <b>Promoted Fansite</b> by the game developers.',
            ],
            skills: [
                icons.python, icons.aiohttp, icons.postgresql, icons.angular, icons.ubuntu, icons.typescript, icons.socketio, icons.redis
            ]
        },
        {
            name: 'android-things-rc522',
            url: 'https://github.com/Galarzaa90/android-things-rc522',
            start: new Date('2017-03-28'),
            end: new Date('2017-11-03'),
            description: 'Android Things library for the RFID module RC522. Handles communication between the module and compatible RFID tags, with support for operations like sector permissions.',
            skills: [
                icons.java,
                icons.android
            ]
        },
        {
            name: 'tibiawiki-sql',
            url: 'https://tibiawiki-sql.rtfd.io/',
            start: new Date('2017-10-27'),
            description: 'Python script that fetches TibiaWiki via its MediaWiki API. Article information is parsed and stored in a SQLite database.',
            skills: [
                icons.python,
                icons.sqlite
            ]
        },
        {
            name: 'tibia.py',
            url: 'http://tibiapy.rtfd.io/',
            start: new Date('2018-06-31'),
            description: 'API to parse tibia.com content into python objects.',
            skills: [
                icons.python,
            ]
        }
    ],
    skills: [
        {
            name: 'Python',
            type: 'Programming Language'
        },
        {
            name: 'Kotlin',
            type: 'Programming Language'
        },
        {
            name: 'C#',
            type: 'Programming Language'
        },
        {
            name: 'Java',
            type: 'Programming Language'
        },
        {
            name: 'JavaScript',
            type: 'Programming Language'
        },
        {
            name: 'TypeScript',
            type: 'Programming Language'
        },
        {
            name: 'C++',
            type: 'Programming Language'
        },
        {
            name: 'Android',
            type: 'Platforms'
        },
        {
            name: '.NET',
            type: 'Platforms'
        },
        {
            name: 'Angular',
            type: 'Platforms'
        },
        {
            name: 'Raspberry Pi',
            type: 'Platforms'
        },
        {
            name: 'Arduino',
            type: 'Platforms'
        },
        {
            name: 'Processing',
            type: 'Platforms'
        },
        {
            name: 'PostgreSQL',
            type: 'Platforms'
        },
        {
            name: 'git',
            type: 'Other'
        },
        {
            name: 'SolidWorks',
            type: 'Other'
        },
        {
            name: 'PCB Design',
            type: 'Other'
        },

        {
            name: 'Digital Electronics',
            type: 'Other'
        },
    ]
};
