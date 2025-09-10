import { faGithub, faGitlab, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  siAiohttp,
  siAndroid,
  siAndroidstudio,
  siAngular,
  siArduino,
  siAzurefunctions,
  siBootstrap,
  siCaddy,
  siCplusplus,
  siCsharp,
  siDassaultsystemes,
  siDiscord,
  siDjango,
  siDocker,
  siDotnet,
  siElectron,
  siFastapi,
  siFirebase,
  siGit,
  siGithubactions,
  siGitlab,
  siGooglemaps,
  siGradle,
  siGrafana,
  siIntellijidea,
  siJavascript,
  siJquery,
  siKotlin,
  siKtor,
  siLabview,
  siMacos,
  siMaterialformkdocs,
  siMetabase,
  siMicrosoftsqlserver,
  siMongodb,
  SimpleIcon,
  siMultisim,
  siMysql,
  siNginx,
  siNodedotjs,
  siOpenai,
  siOpenjdk,
  siOracle,
  siPortainer,
  siPostgresql,
  siPostman,
  siProcessingfoundation,
  siPrometheus,
  siProteus,
  siPycharm,
  siPydantic,
  siPython,
  siRabbitmq,
  siRaspberrypi,
  siReact,
  siReadthedocs,
  siRedis,
  siRemix,
  siSentry,
  siSinglestore,
  siSocketdotio,
  siSonarqube,
  siSphinx,
  siSqlalchemy,
  siSqlite,
  siStripe,
  siSwagger,
  siTypescript,
  siUbuntu,
  siVisualstudio,
  siVisualstudiocode,
  siWindows,
  siXamarin,
} from 'simple-icons';

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
  printable: boolean;
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
  printable?: boolean;
}

export interface School {
  name: string;
  start: Date;
  end?: Date;
  level: string;
  title: string;
  logo: string;
  skills?: Array<SkillIcon>;
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
  hiddenBrand?: boolean;
  printable?: boolean,
}

export interface Skill {
  name: string;
  type: string;
  icon?: SkillIcon;
}

export interface SkillIcon {
  icon: SimpleIcon;
  text: string;
  color?: string;
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
  sphinx: {
    icon: siSphinx,
    text: 'Sphinx'
  },
  mkdocsMaterial: {
    icon: siMaterialformkdocs,
    text: 'Material for MkDocs'
  },
  rtd: {
    icon: siReadthedocs,
    text: 'Read The Docs'
  },
  sqlAlchemy: {
    icon: siSqlalchemy,
    text: 'SQLAlchemy'
  },
  stripe: {
    icon: siStripe,
    text: 'Stripe'
  },
  firebase: {
    icon: siFirebase,
    text: 'Firebase'
  },
  googleMaps: {
    icon: siGooglemaps,
    text: 'Google Maps',
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
    icon: siOpenjdk,
    text: 'Java',
    color: '007396',
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
    icon: siAngular,
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
  mongodb: {
    icon: siMongodb,
    text: 'MongoDB'
  },
  angular: {
    icon: siAngular,
    text: 'Angular'
  },
  react: {
    icon: siReact,
    text: 'React'
  },
  remix: {
    icon: siRemix,
    text: 'Remix'
  },
  openai: {
    icon: siOpenai,
    text: 'OpenAI',
  },
  socketio: {
    icon: siSocketdotio,
    text: 'Socket.IO'
  },
  ubuntu: {
    icon: siUbuntu,
    text: 'Ubuntu'
  },
  windows: {
    icon: siWindows,
    text: 'Windows'
  },
  macOs: {
    icon: siMacos,
    text: 'macOS'
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
    text: 'SingleStore'
  },
  oracle: {
    icon: siOracle,
    text: 'Oracle'
  },
  swagger: {
    icon: siSwagger,
    text: 'Swagger'
  },
  aiohttp: {
    icon: siAiohttp,
    text: 'aiohttp'
  },
  fastapi: {
    icon: siFastapi,
    text: 'FastAPI',
  },
  pydantic: {
    icon: siPydantic,
    text: 'Pydantic',
  },
  ktor: {
    icon: siKtor,
    text: 'Ktor',
  },
  rabbitMq: {
    icon: siRabbitmq,
    text: 'RabbitMQ',
  },
  caddy: {
    icon: siCaddy,
    text: 'Caddy'
  },
  nginx: {
    icon: siNginx,
    text: 'nginx'
  },
  portainer: {
    icon: siPortainer,
    text: 'Portainer',
  },
  docker: {
    icon: siDocker,
    text: 'Docker'
  },
  grafana: {
    icon: siGrafana,
    text: 'Grafana'
  },
  metabase: {
    icon: siMetabase,
    text: 'Metabase'
  },
  sonarqube: {
    icon: siSonarqube,
    text: 'SonarQube'
  },
  sentry: {
    icon: siSentry,
    text: 'Sentry'
  },
  prometheus: {
    icon: siPrometheus,
    text: 'Prometheus'
  },
  githubActions: {
    icon: siGithubactions,
    text: 'GitHub Actions',
  },
  gitlabCiCd: {
    icon: siGitlab,
    text: 'GitLab CI/CD',
  },
  dotnet: {
    icon: siDotnet,
    text: '.NET'
  },
  git: {
    icon: siGit,
    text: 'git'
  },
  solidWorks: {
    icon: siDassaultsystemes,
    text: 'SolidWorks'
  },
  androidStudio: {
    icon: siAndroidstudio,
    text: 'Android Studio'
  },
  intelliJ: {
    icon: siIntellijidea,
    text: 'IntelliJ IDEA'
  },
  pycharm: {
    icon: siPycharm,
    text: 'PyCharm'
  },
  visualStudio: {
    icon: siVisualstudio,
    text: 'Visual Studio'
  },
  vsCode: {
    icon: siVisualstudiocode,
    text: 'Visual Studio Code'
  },
  postman: {
    icon: siPostman,
    text: 'Postman'
  },
  proteus: {
    icon: siProteus,
    text: 'Proteus'
  },
  multisim: {
    icon: siMultisim,
    text: 'Multisim'
  },
  labView: {
    icon: siLabview,
    text: 'LabView'
  },
  processing: {
    icon: siProcessingfoundation,
    text: 'Processing'
  },
  jquery: {
    icon: siJquery,
    text: 'jQuery'
  },
  boostrap: {
    icon: siBootstrap,
    text: 'Bootstrap'
  },
  discord: {
    icon: siDiscord,
    text: 'Discord',
  },
  gradle: {
    icon: siGradle,
    text: 'Gradle',
  },
};

export let profile: Profile = {
  headline: 'Senior Software Engineer | Backend, Data, DevOps',
  aboutMe:  /*html*/`
  <p>Senior Software Engineer with 8 years of experience building reliable, maintainable software across finance and large-scale community platforms. Creator of <em>NabBot</em>, a Discord bot ecosystem recognized as an official Promoted Fansite by Tibia’s developers.</p>
<p>Specialized in backend development with Python (FastAPI) and Kotlin (Ktor), with extensive experience designing and operating databases at scale — handling hundreds of millions of rows while ensuring performance and reliability.</p>
<p>Skilled in API design and implementation, from data-heavy financial services to real-time gaming platforms, with a strong focus on clean, documented code and sustainable architectures.</p>
<p>Hands-on with DevOps practices for small to medium-scale environments: containerized deployments, CI/CD workflows, and observability tooling to keep services stable and maintainable.</p>

  `,
  location: 'Mexico',
  languages: [
    {
      name: 'Spanish',
      level: 'Native'
    },
    {
      name: 'English',
      level: 'C1'
    },
  ],
  onlineProfiles: [
    {
      icon: faEnvelope,
      url: 'mailto:allan.galarza@gmail.com',
      title: 'allan.galarza@gmail.com',
      printable: true,
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/galarzaa/',
      title: 'galarzaa',
      printable: false,
    },
    {
      icon: faGithub,
      url: 'https://github.com/Galarzaa90',
      title: 'Galarzaa90',
      printable: true,
    },
    {
      icon: faGitlab,
      url: 'https://gitlab.com/Galarzaa90',
      title: 'Galarzaa90',
      printable: false,
    }
  ],
  interests: [
    'Open Source',
    'Homelab',
    'Electronics',
    'IoT',
    'PC Building',
    'Gaming',
  ],
  workExperience: [
    {
      company: 'Fully Parsed',
      start: new Date('2024-08-20'),
      position: 'Software Engineer',
      description: 'Startup developing data processing and reporting workflows for financial and investment-related domains.',
      items: [
        'Reduced report generation time by 60% through backend optimizations and data aggregation improvements.',
        'Designed and implemented APIs for workflow orchestration and data analysis, leveraging containerized services on GCP with Windmill for scalable task execution.',
        'Improved developer onboarding and deployment speed by building a modular architecture that supports scripts in multiple languages with automatic dependency management.',
        'Integrated AI-driven data processing using prompt engineering and agent-based tools (e.g., Claude, Cursor), applying LLMs to transform, validate, and enrich structured datasets.',
      ],
      skills: [
        icons.typescript,
        icons.react,
        icons.remix,
        icons.mongodb,
        icons.python,
        icons.fastapi,
        icons.openai
      ]
    },
    {
      company: 'Encora',
      start: new Date('2020-11-09'),
      end: new Date('2024-06-02'),
      logo: 'Encora.png',
      url: 'https://www.encora.com',
      position: 'Software Engineer',
      description: 'Backend developer and database administrator for oil & gas industry applications.',
      items: [
        'Built and maintained APIs for monitoring thousands of pipelines and processing millions of sensor records daily, focusing on data analysis and presentation for operational insights.',
        'Led a major backend refactor introducing FastAPI + Pydantic, improving maintainability, boosting documentation quality, and accelerating collaboration with frontend teams.',
        'Developed backend services to map equipment and sensor data, consolidating previously fragmented internal apps into a unified system.',
        'Built event-driven services consuming sensor data streams to trigger automated warnings, alarms, and operational controls based on real-time conditions.',
        'Maintained CI/CD pipelines using GitHub Actions with Docker with on-prem Kubernetes, managing deployments and ensuring system reliability.'
      ],
      skills: [
        icons.python,
        icons.swagger,
        icons.aiohttp,
        icons.singlestore,
        icons.redis,
        icons.oracle,
        icons.fastapi,
        icons.docker,
        icons.rabbitMq,
        icons.sqlAlchemy,
        icons.githubActions,
      ]
    },

    {
      company: 'Joybyte',
      start: new Date('2020-06-15'),
      end: new Date('2020-10-31'),
      url: 'https://www.joybyte.com/',
      position: 'Freelance Developer',
      logo: 'joybyte.png',
      description: 'Collaborated with a team of freelance engineers under an in-house technical lead to support backend development for a pregnancy tracking mobile app.',
      items: [
        'Designed and implemented APIs to provide stage-specific health tips, pregnancy tracking, and clinic referrals based on user profiles.',
        'Built and optimized a relational database using a Database-First approach, focusing on scalability and flexible schema evolution.',
        'Developed stored procedures and backend logic to tailor information dynamically to each user’s pregnancy stage and tracked health data.',
      ],
      skills: [
        icons.csharp,
        icons.dotnet,
        icons.azurefunctions,
        icons.mssql,
      ]
    },
    {
      company: 'Gila Software',
      start: new Date('2019-05-13'),
      end: new Date('2020-10-27'),
      url: 'https://gilasw.com/',
      position: 'Software Engineer',
      logo: 'GilaSW.png',
      description: 'Worked on multiple client projects as part of the backend team, following Scrum methodology. Took strong initiative on addressing technical debt and improving code quality practices across the company.',
      items: [
        'Built backend services for a replacement inspection and inventory platform, focusing on database design and microservice architecture with Azure Functions.',
        'Delivered APIs and offline-capable features for a fire & security inspection mobile app, essential for facilities where connectivity was unreliable.',
        'Automated generation of regulatory fire and safety reports, eliminating manual report creation for clients.',
        'Supported additional projects including a startup social media pilot and a travel CMS, contributing features and bug fixes as required.',
        'Compiled and drove adoption of a technical debt reduction plan for the inspection app, which reduced bug rates and improved overall maintainability.',
        'Researched and trialed SonarQube integration into CI/CD pipelines, laying groundwork for company-wide static analysis (though not fully adopted).'
      ],
      skills: [
        icons.csharp,
        icons.dotnet,
        icons.azurefunctions,
        icons.mssql,
        icons.xamarin,
        icons.python,
        icons.django
      ]
    },
    {
      company: 'LyF Ingeniería',
      start: new Date('2018-01-16'),
      end: new Date('2019-05-17'),
      position: 'Software Engineer',
      logo: 'LYF.png',
      url: 'https://lopez-fernandez.com/',
      description: 'Developed applications and device libraries for money management systems, enhancing functionality, third-party integrations, and transaction monitoring.',
      items: [
        'Built end-user kiosk applications integrating multiple money devices (acceptors, dispensers, validators) for payments, utilities, and banking transactions — deployed in production, including international installations.',
        'Developed reusable software interfaces for MEI and CC-Talk devices, enabling both in-house and customer integrations.',
        'Integrated real-time monitoring services into kiosk apps, providing transaction tracking and auditability.',
        'Designed and managed supporting web services and databases to ensure transactional integrity and availability.',
        'Contributed quality improvements while temporarily outsourced at Qualisys for SAP Business One addon development.'
      ],
      skills: [
        icons.csharp,
        icons.dotnet,
        icons.javascript,
        icons.nodejs,
        icons.gradle,
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
      end: new Date('2017-12-29'),
      position: 'Innovation Development Engineer',
      description: 'Developed applied R&D projects at the intersection of embedded systems, Android applications, and hardware design.',
      items: [
        'Built an Android BLE app and UI to control ATV headlights, mounted and tested with embedded hardware systems.',
        'Designed CAD-based protective enclosures for electronic control devices, ensuring functional durability in mechanical assemblies.',
        'Developed an aquaponics greenhouse monitoring system, integrating sensors for temperature, pH, dissolved oxygen, humidity, and light, with a backend for real-time data collection.',
        'Designed both the embedded UI and mobile companion app for a dispensing machine demo, featuring QR-based login and a credit management system backed by a database.',
        'Produced detailed technical and feasibility reports supporting research and innovation activities.',
      ],
      skills: [
        icons.android,
        icons.java,
        icons.cplusplus,
        icons.arduino,
        icons.processing,
        icons.python,
        icons.proteus,
        icons.solidWorks,
      ]
    },
    {
      company: 'Universidad de Sonora',
      start: new Date('2015-04-06'),
      end: new Date('2015-05-29'),
      position: 'Technical Manager Assistant',
      logo: 'UNISON.png',
      url: 'https://www.unison.mx/',
      description: 'Assisted the technical manager and planned the project: <em>Feasibility study of photovoltaic cells for airport gas stations electricity supply</em>.',
      items: [
        'Implemented dual-axis solar tracking algorithms on microcontroller-based systems.',
        'Designed and assembled a motor control rig to prototype solar tracker mechanisms.',
        'Created CAD-based mechanical structures for photovoltaic cells, featuring automatic facet canting.',
        'Listed as co-inventor on patent <em>System and method for the automatic facet canting of heliostats.</em> (Patent Number: MX2015008322A, December 2016).'
      ],
      skills: [
        icons.cplusplus,
        icons.arduino,
        icons.processing,
        icons.proteus,
        icons.solidWorks
      ],
      printable: false,
    },
    {
      company: 'Grupo TEPEI',
      start: new Date('2014-07-14'),
      end: new Date('2014-11-01'),
      position: 'Developer',
      description: 'Worked on an energy-saving classroom control system project, designed to automate air conditioning and other devices based on schedules.',
      items: [
        'Developed an embedded IR control system capable of learning sequences from existing remotes and persisting them with EEPROM memory.',
        'Built a server-connected Android application for teachers to create and manage classroom schedules for automated device control.',
      ],
      skills: [
        icons.cplusplus,
        icons.arduino,
        icons.java,
        icons.android,
        icons.proteus
      ],
      printable: false,
    },
    {
      company: 'Plataforma Solar de Hermosillo',
      start: new Date('2014-01-06'),
      end: new Date('2014-07-11'),
      logo: 'PSH.png',
      url: 'http://psh.isi.uson.mx/',
      position: 'Intern Developer',
      description: 'Worked at a solar energy research facility on alternative heliostat control systems.',
      items: [
        'Developed a low-cost embedded control system for solar tracking, replacing expensive CompactRIO hardware with Arduino-based solutions at a fraction of the cost.',
        'Adapted and optimized a solar position algorithm to run efficiently on limited embedded hardware.',
        'Built graphical interfaces in Processing to control, monitor, and test heliostat mechanisms, including fine-tuning of PID control values.'
      ],
      skills: [
        icons.cplusplus,
        icons.arduino,
        icons.proteus,
        icons.processing
      ],
      printable: false
    }
  ],
  education: [
    {
      name: 'Universidad de Sonora',
      start: new Date('2009-08-01'),
      end: new Date('2014-04-01'),
      level: 'Bachelor\'s Degree',
      title: 'Mechatronics Engineering (Ingeniería Mecatrónica)',
      logo: 'UNISON.png',
      skills: [
        icons.java,
        icons.cplusplus,
        icons.multisim,
        icons.proteus,
        icons.arduino,
        icons.labView,
        icons.solidWorks,
        icons.processing,
      ]
    },
    {
      name: 'CBTis 11',
      start: new Date('2006-08-01'),
      end: new Date('2009-06-01'),
      level: 'High School Diploma',
      title: 'Specialization in Mechatronics',
      logo: 'cbtis11.png',
      skills: [
        icons.cplusplus,
        icons.multisim,
        icons.proteus,
      ]
    }
  ],
  projects: [
    {
      name: 'NabBot',
      url: 'https://nabbot.xyz',
      start: new Date('2016-03-02'),
      logo: 'NabBot.png',
      description: 'Discord bot ecosystem for the MMORPG Tibia, recognized as a Promoted Fansite by the game’s developers and listed on the official Tibia website. Used in over 17,000 servers worldwide.',
      items: [
        'Serves 6,000 monthly active users and handles an average of 114,000 command requests per month.',
        'Built services to scrape and process game data, generating large historical datasets (235M+ records across player activity and events).',
        'Provides real-time event notifications and account-linked insights for players.',
        'Migrated the codebase from Python to Kotlin, consolidating into a monorepo and improving maintainability through static typing and unified service architecture.',
        'Implemented automated pipelines with GitLab CI/CD to build, test, and deploy Docker images to a self-managed Ubuntu VDS.',
        'Set up observability with Prometheus, Grafana, and Metabase, ensuring reliable monitoring and long-term uptime.',
      ],
      skills: [
        icons.discord,
        icons.python,
        icons.aiohttp,
        icons.postgresql,
        icons.angular,
        icons.ubuntu,
        icons.typescript,
        icons.socketio,
        icons.redis,
        icons.gitlabCiCd,
        icons.docker,
        icons.prometheus,
        icons.grafana,
        icons.metabase,
        icons.gradle,
        icons.kotlin,
        icons.ktor,
      ]
    },
    {
      name: 'On-Demand Medical Service App',
      hiddenBrand: true,
      start: new Date('2023-09-11'),
      end: new Date('2024-03-11'),
      description: 'Engineered the backend for a mobile platform connecting patients and doctors, with integrations for payments, mapping, and notifications.',
      items: [
        'Designed and implemented an HTTP API backend to support iOS and Android apps.',
        'Built a relational database with PostGIS extensions for geospatial queries, managing users, service history, and ratings.',
        'Integrated Stripe Connect for in-app payments between patients and doctors.',
        'Implemented Google Maps API for travel time estimation and geocoding.',
        'Configured Firebase Cloud Messaging to deliver real-time server-to-mobile notifications.',
        'Deployed as a Docker Compose project on a VPS, including application and database containers.',
      ],
      skills: [
        icons.python,
        icons.fastapi,
        icons.postgresql,
        icons.sqlAlchemy,
        icons.stripe,
        icons.googleMaps,
        icons.firebase,
        icons.docker,
        icons.sentry,
      ]
    },
    {
      name: 'Car Insurance Web app',
      hiddenBrand: true,
      start: new Date('2021-04-29'),
      end: new Date('2021-12-14'),
      description: 'Took over development of a car insurance quotation platform, improving code quality while delivering new backend and frontend features.',
      items: [
        'Integrated a third-party REST API for geocoding and insurance quote generation.',
        'Designed models for serialization and database storage of users, quotations, and policies.',
        'Extended the admin panel with tools to manage users, quotations, and insurance policies.',
        'Built front-facing web forms for generating insurance quotes.',
        'Cleaned up and standardized frontend code, significantly improving maintainability of the CSS and UI.',
      ],
      skills: [
        icons.python,
        icons.django,
        icons.javascript,
        icons.jquery,
        icons.boostrap,
        icons.postgresql
      ]
    },
    {
      name: 'tibia.py',
      url: 'http://tibiapy.rtfd.io/',
      start: new Date('2018-07-31'),
      description: 'Python library for scraping and deserializing Tibia.com data, originally extracted from NabBot and maintained as a standalone package.',
      items: [
        'Published on PyPI and GitHub with full documentation on Read the Docs, plus a Dockerized API server for quick deployment.',
        'Reached 40+ GitHub stars and averages ~350 monthly downloads, with adoption by community developers beyond NabBot.',
        'Designed strongly typed data models and a client API to standardize scraped content.',
        'Maintained >90% test coverage, ensuring reliability even as Tibia.com changed its HTML structure.',
        'Continues in active maintenance, providing fixes for site changes while the feature set remains stable and complete.',
      ],
      skills: [
        icons.python,
        icons.aiohttp,
        icons.pydantic,
        icons.fastapi,
        icons.githubActions,
        icons.docker,
      ]
    },
    {
      name: 'tibiawiki-sql',
      url: 'https://tibiawiki-sql.rtfd.io/',
      start: new Date('2017-10-27'),
      description: 'Python tool that ingests TibiaWiki articles via the MediaWiki API and converts them into a structured SQLite database.',
      items: [
        'Published on PyPI and GitHub with documentation built in MkDocs; also provides a Docker script for quick setup.',
        'Reached 30+ GitHub stars and averages 100 monthly downloads, with community contributions alongside solo development.',
        'Processes thousands of TibiaWiki articles into structured data, enabling developers to query and analyze content directly from a relational database.',
        'Maintained as a stable project, still synchronized with TibiaWiki updates.',
      ],
      skills: [
        icons.python,
        icons.sqlite,
        icons.githubActions,
        icons.docker,
      ],
      printable: false,
    },

    {
      name: 'TibiaKt',
      url: 'https://galarzaa.com/TibiaKt',
      start: new Date('2020-08-06'),
      description: 'Kotlin JVM library for parsing Tibia.com content, developed during NabBot’s migration from Python to Kotlin and now powering NabBot in production.',
      items: [
        'Published on Maven Central, available for integration by other developers.',
        'Provides strongly typed models and a Ktor-based client for reliable website parsing.',
        'Handles ~2,500 requests per minute in production through NabBot.',
        'Maintains 90%+ test coverage and automated builds with GitHub Actions and Docker.',
        'Actively maintained with ongoing fixes for upstream site changes.',
      ],
      skills: [
        icons.gradle,
        icons.kotlin,
        icons.ktor,
        icons.githubActions,
        icons.docker,
      ],
      printable: false,
    },
    {
      name: 'Dodo',
      logo: 'Dodo.png',
      start: new Date('2016-08-16'),
      end: new Date('2019-04-06'),
      description: 'Side project developed with a small team as a two-sided job marketplace app.',
      items: [
        'Built a native Android application with geolocation services to match users offering and requesting odd jobs.',
        'Migrated the codebase from Java to Kotlin during Android’s adoption of Kotlin as an official language, improving readability and maintainability.',
        'Integrated Firebase Messaging Service for job notifications and progress tracking.',
        'Implemented Google authentication using Firebase for account management.',
        'Designed and connected the app to a SQL database for storing user and job data.',
        'Introduced GitLab CI/CD pipelines to automatically generate APK builds, enabling the team to test and share updated versions throughout development.',
      ],
      skills: [
        icons.gradle,
        icons.java,
        icons.kotlin,
        icons.android,
        icons.mysql,
        icons.firebase,
        icons.gitlabCiCd,
      ]
    },
    {
      name: 'android-things-rc522',
      url: 'https://github.com/Galarzaa90/android-things-rc522',
      start: new Date('2017-03-28'),
      end: new Date('2017-11-03'),
      description: 'Android Things library for the RC522 RFID module, providing communication between the device and compatible tags.',
      items: [
        'Implemented complete functionality for card authentication, block read/write, and memory operations (increase, decrease, transfer).',
        'Published to Bintray as one of my first publicly released libraries.',
        'Reached 45 GitHub stars and received community use before Android Things was discontinued.',
        'Now archived, but remains available on GitHub as a stable reference.',
      ],
      skills: [
        icons.gradle,
        icons.java,
        icons.android
      ],
      printable: false,
    },
  ],
  skills: [
    // Core backend & primary stack
    { name: 'Python', type: 'Programming Languages', icon: icons.python },
    { name: 'FastAPI', type: 'Framework/Library', icon: icons.fastapi },
    { name: 'Kotlin', type: 'Programming Languages', icon: icons.kotlin },
    { name: 'Ktor', type: 'Framework/Library', icon: icons.ktor },
    { name: 'PostgreSQL', type: 'Databases', icon: icons.postgresql },
    { name: 'Docker', type: 'DevOps', icon: icons.docker },
    { name: 'GitHub Actions', type: 'DevOps', icon: icons.githubActions },
    { name: 'GitLab CI/CD', type: 'DevOps', icon: icons.gitlabCiCd },
    { name: 'RabbitMQ', type: 'DevOps', icon: icons.rabbitMq }, // add here if you defined it in icons

    // Secondary languages & frameworks you’re solid in
    { name: 'Java', type: 'Programming Languages', icon: icons.java },
    { name: 'C#', type: 'Programming Languages', icon: icons.csharp },
    { name: 'TypeScript', type: 'Programming Languages', icon: icons.typescript },
    { name: 'JavaScript', type: 'Programming Languages', icon: icons.javascript },
    { name: 'Node.js', type: 'Platforms', icon: icons.nodejs },
    { name: 'Django', type: 'Framework/Library', icon: icons.django },
    { name: 'aiohttp', type: 'Framework/Library', icon: icons.aiohttp },
    { name: 'SQLAlchemy', type: 'Framework/Library', icon: icons.sqlAlchemy },
    { name: 'Pydantic', type: 'Framework/Library', icon: icons.pydantic },

    // Databases (grouped)
    { name: 'Redis', type: 'Databases', icon: icons.redis },
    { name: 'MySQL', type: 'Databases', icon: icons.mysql },
    { name: 'SQLite', type: 'Databases', icon: icons.sqlite },
    { name: 'Microsoft SQL Server', type: 'Databases', icon: icons.mssql },
    { name: 'SingleStore', type: 'Databases', icon: icons.singlestore },
    { name: 'Oracle', type: 'Databases', icon: icons.oracle },

    // DevOps & Infra (secondary tier)
    { name: 'Caddy', type: 'DevOps', icon: icons.caddy },
    { name: 'nginx', type: 'DevOps', icon: icons.nginx },
    { name: 'Prometheus', type: 'DevOps', icon: icons.prometheus },
    { name: 'Grafana', type: 'DevOps', icon: icons.grafana },
    { name: 'Metabase', type: 'DevOps', icon: icons.metabase },
    { name: 'SonarQube', type: 'DevOps', icon: icons.sonarqube },
    { name: 'Sentry', type: 'DevOps', icon: icons.sentry },
    { name: 'Portainer', type: 'DevOps', icon: icons.portainer },
    { name: 'Gradle', type: 'DevOps', icon: icons.gradle },

    // Tools / IDEs
    { name: 'git', type: 'Tools', icon: icons.git },
    { name: 'Postman', type: 'Tools', icon: icons.postman },
    { name: 'IntelliJ IDEA', type: 'Tools', icon: icons.intelliJ },
    { name: 'PyCharm', type: 'Tools', icon: icons.pycharm },
    { name: 'Visual Studio Code', type: 'Tools', icon: icons.vsCode },
    { name: 'Visual Studio', type: 'Tools', icon: icons.visualStudio },
    { name: 'Android Studio', type: 'Tools', icon: icons.androidStudio },

    // Other platforms (OS & misc)
    { name: 'Ubuntu', type: 'Platforms', icon: icons.ubuntu },
    { name: 'Windows', type: 'Platforms', icon: icons.windows },
    { name: 'macOS', type: 'Platforms', icon: icons.macOs },

    // Side tech / hobbies (optional to mark printable: false)
    { name: 'Android', type: 'Platforms', icon: icons.android },
    { name: '.NET', type: 'Platforms', icon: icons.dotnet },
    { name: 'Angular', type: 'Framework/Library', icon: icons.angular },
    { name: 'Material for MkDocs', type: 'Framework/Library', icon: icons.mkdocsMaterial },
    { name: 'Sphinx', type: 'Framework/Library', icon: icons.sphinx },
    { name: 'Read The Docs', type: 'Framework/Library', icon: icons.rtd },
    { name: 'Discord', type: 'Platforms', icon: icons.discord },
    { name: 'Raspberry Pi', type: 'Platforms', icon: icons.raspberrypi },
    { name: 'Arduino', type: 'Platforms', icon: icons.arduino },
    { name: 'Processing', type: 'Platforms', icon: icons.processing },
    { name: 'C++', type: 'Programming Languages', icon: icons.cplusplus }
  ]

};
