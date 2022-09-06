import { icon } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SimpleIcon } from 'simple-icons';
import {
    siPython, siMysql, siDotnet, siCsharp, siAzurefunctions, siMicrosoftsqlserver, siDjango, siXamarin, siNodedotjs, siKotlin,
    siAndroid, siJava, siArduino, siRaspberrypi, siCplusplus, siAngularjs, siJavascript, siElectron, siProcessingfoundation, siGit,
    siPrometheus, siGrafana, siDocker, siAiohttp, siSwagger, siOracle, siSinglestore, siTypescript, siSqlite, siRedis, siUbuntu,
    siSocketdotio, siAngular, siPostgresql, siFastapi
} from 'simple-icons/icons';

export interface Profile {
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

export interface Language {
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
    url?: string;
    start: Date;
    end?: Date;
    logo?: string;
    description: string;
    items?: Array<string>;
    skills: Array<SkillIcon>;
}

export interface Skill {
    name: string;
    type: string;
    icon?: SkillIcon;
}
export interface SkillIcon {
    icon: SimpleIcon;
    text: string;
}

const icons = {
    python: {
        icon: siPython,
        text: 'Python'
    },
    mysql: {
        icon: siMysql,
        text: 'MySQL'
    },
    csharp: {
        icon: siCsharp,
        text: 'C#'
    },
    azurefunctions: {
        icon: siAzurefunctions,
        text: 'Azure Functions'
    },
    mssql: {
        icon: siMicrosoftsqlserver,
        text: 'Microsoft SQL Server'
    },
    xamarin: {
        icon: siXamarin,
        text: 'Xamarin'
    },
    django: {
        icon: siDjango,
        text: 'Django'
    },
    kotlin: {
        icon: siKotlin,
        text: 'Kotlin'
    },
    nodejs: {
        icon: siNodedotjs,
        text: 'NodeJS'
    },
    android: {
        icon: siAndroid,
        text: 'Android'
    },
    java: {
        icon: siJava,
        text: 'Java'
    },
    raspberrypi: {
        icon: siRaspberrypi,
        text: 'Raspberry Pi'
    },
    cplusplus: {
        icon: siCplusplus,
        text: 'C++'
    },
    arduino: {
        icon: siArduino,
        text: 'Arduino'
    },
    angularjs: {
        icon: siAngularjs,
        text: 'AngularJS'
    },
    javascript: {
        icon: siJavascript,
        text: 'JavaScript'
    },
    electron: {
        icon: siElectron,
        text: 'Electron'
    },
    postgresql: {
        icon: siPostgresql,
        text: 'PostgreSQL'
    },
    angular: {
        icon: siAngular,
        text: 'Angular'
    },
    socketio: {
        icon: siSocketdotio,
        text: 'Socket.IO'
    },
    ubuntu: {
        icon: siUbuntu,
        text: 'Ubuntu'
    },
    redis: {
        icon: siRedis,
        text: 'Redis'
    },
    sqlite: {
        icon: siSqlite,
        text: 'SQLite'
    },
    typescript: {
        icon: siTypescript,
        text: 'TypeScript'
    },
    singlestore: {
        icon: siSinglestore,
        text: 'SingleStore (previously MemSQL)'
    },
    oracle: {
        icon: siOracle,
        text: 'Oracle DBMS'
    },
    swagger: {
        icon: siSwagger,
        text: 'Swagger'
    },
    aiohttp: {
        icon: siAiohttp,
        text: 'aiohttp'
    },
    docker: {
        icon: siDocker,
        text: 'Docker'
    },
    grafana: {
        icon: siGrafana,
        text: 'Grafana'
    },
    prometheus: {
        icon: siPrometheus,
        text: 'Prometheus'
    },
    dotnet: {
        icon: siDotnet,
        text: '.NET'
    },
    git: {
        icon: siGit,
        text: 'git'
    },
    processing: {
        icon: siProcessingfoundation,
        text: 'Processing'
    },
    fastApi: {
        icon: siFastapi,
        text: 'FastAPI'
    },
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
            description: 'Previously known as Nearsoft. Working as a backend developer, at the moment focusing in Python.',
            items: [
                'Design, development and maintenance of APIs for mobile and web apps to monitor and analyze pipeline flows and metrics.',
                'Design and development of a backend application to create mappings between field equipment and field sensor data.',
            ],
            skills: [
                icons.python, icons.swagger, icons.aiohttp, icons.singlestore, icons.redis, icons.oracle, icons.fastApi
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
                icons.csharp, icons.azurefunctions, icons.mssql,
            ]
        },
        {
            company: 'Gila Software',
            start: new Date('2019-05-13'),
            end: new Date('2020-10-27'),
            url: 'https://gilasw.com/',
            position: 'Software Engineer',
            logo: 'GilaSW.png',
            description: 'Worked on multiple projects for multiple clients as part of the backend development team, following scrum methdology.',
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
                icons.csharp,
                icons.javascript,
                icons.nodejs,
                icons.kotlin,
                icons.raspberrypi,
                icons.angularjs,
                icons.electron,
                icons.sqlite,
                icons.mysql,
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
                icons.android, icons.java, icons.cplusplus, icons.arduino, icons.processing, icons.python,
            ]
        },
        {
            company: 'Universidad de Sonora',
            start: new Date('2015-03-01'),
            end: new Date('2015-05-01'),
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
                icons.android, icons.java, icons.cplusplus, icons.arduino, icons.processing
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
            description: 'Discord bot focused on the MMO Tibia. An interactive bot that answers to different commands, handles a user database and does realtime updates based on game events.\nThe project is composed of multiple smaller services and applications to handle data gathering and communication.',
            items: [
                'In over 12,000 Discord servers.',
                'Over 10,000 monthly users.',
                'Recognized as a <b>Promoted Fansite</b> by the game developers.',
            ],
            skills: [
                icons.python, icons.aiohttp, icons.postgresql, icons.angular, icons.ubuntu, icons.typescript, icons.socketio, icons.redis,
                icons.docker, icons.prometheus, icons.grafana
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
                icons.sqlite,
            ]
        },
        {
            name: 'tibia.py',
            url: 'http://tibiapy.rtfd.io/',
            start: new Date('2018-06-31'),
            description: 'API to parse tibia.com content into python objects.',
            skills: [
                icons.python,
                icons.aiohttp,
            ]
        },
        {
            name: 'Dodo',
            logo: 'Dodo.png',
            start: new Date('2016-08-16'),
            end: new Date('2019-04-06'),
            description: 'Android application and web service featuring a two-sided network for odd jobs.',
            skills: [
                icons.java,
                icons.kotlin,
                icons.android,
                icons.mysql,
            ]
        }
    ],
    skills: [
        {
            name: 'Python',
            type: 'Programming Language',
            icon: icons.python
        },
        {
            name: 'Kotlin',
            type: 'Programming Language',
            icon: icons.kotlin,
        },
        {
            name: 'C#',
            type: 'Programming Language',
            icon: icons.csharp
        },
        {
            name: 'Java',
            type: 'Programming Language',
            icon: icons.java
        },
        {
            name: 'JavaScript',
            type: 'Programming Language',
            icon: icons.javascript
        },
        {
            name: 'TypeScript',
            type: 'Programming Language',
            icon: icons.typescript
        },
        {
            name: 'C++',
            type: 'Programming Language',
            icon: icons.cplusplus
        },
        {
            name: 'Android',
            type: 'Platforms',
            icon: icons.android
        },
        {
            name: '.NET',
            type: 'Platforms',
            icon: icons.dotnet
        },
        {
            name: 'Angular',
            type: 'Platforms',
            icon: icons.angular
        },
        {
            name: 'Django',
            type: 'Platforms',
            icon: icons.django
        },
        {
            name: 'Raspberry Pi',
            type: 'Platforms',
            icon: icons.raspberrypi
        },
        {
            name: 'Arduino',
            type: 'Platforms',
            icon: icons.arduino
        },
        {
            name: 'Processing',
            type: 'Platforms',
            icon: icons.processing
        },
        {
            name: 'PostgreSQL',
            type: 'Platforms',
            icon: icons.postgresql
        },
        {
            name: 'MySQL',
            type: 'Platforms',
            icon: icons.mysql
        },
        {
            name: 'SQLite',
            type: 'Platforms',
            icon: icons.sqlite
        },
        {
            name: 'Redis',
            type: 'Platforms',
            icon: icons.redis
        },
        {
            name: 'Docker',
            type: 'Platforms',
            icon: icons.docker
        },
        {
            name: 'git',
            type: 'Other',
            icon: icons.git
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
