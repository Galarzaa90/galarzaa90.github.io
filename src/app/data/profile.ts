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
  SimpleIcon,
  siMultisim,
  siMysql,
  siNginx,
  siNodedotjs,
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
  siReadthedocs,
  siRedis,
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
  headline: 'Hello, my name is Allan!',
  aboutMe:  /*html*/`
  <p>Senior Software engineer with 8 years of experience focused for building high-quality, maintainable code. With experience across diverse industries like oil and gas, healthcare, electronics and finance.</p>
  <p>Proficient in various programming languages and technologies such as Python, Kotlin, C# and SQL, prioritizing following best practices for clean and well-documented codebases.</p>
  <p>Extensive experience designing and implement robust databases to support different sorts of applications as well as designing and developing well-documented and APIs.</p>
  <p>With experience in system administration on virtual servers, container deployments and monitoring systems, as well as designing and maintaining CI/CD workflows.</p>
  `,
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
      title: 'allan.galarza@gmail.com',
      printable: true,
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/galarzaa/',
      title: 'LinkedIn',
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
      description: 'Previously known as Nearsoft. Working as a backend developer and database administrator.',
      items: [
        'Design, development and maintenance of APIs for mobile and web apps to monitor and analyze pipeline flows and metrics in the oil industry.',
        'Design and development of a backend application to create mappings between field equipment and field sensor data.',
        'Development of service tasks to synchronize data and create events based on parameter configurations.',
        'Management of GitHub actions workflows to build and deploy Docker images to on-premises Kubernetes infrastructure.',
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
      description: 'Assisted the backend team during off-hours in developing a new release for a mobile pregnancy tracking app.',
      items: [
        'Designed APIs for the mobile app, providing information based on the user\'s registered due date and tracked health information, while providing tips and information based on their current pregnancy stage, as well as referring to health clinics.',
        'Implemented Database First design and management, aiming for scalability and flexibility.',
        'Developed and maintained stored procedures and other database logic, creating tailored information for users based on their pregnancy stage, symptom tracking and other information.',
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
      description: 'Worked on multiple projects for multiple clients as part of the backend development team, following scrum methdology, taking strong initiative on standardizing good coding practices across the company and the use of code quality tools.',
      items: [
        'Developed the backend for a web application to create and manage dynamically generated inspections and inventory. From the design of the database, to the microservice achitecture using Azure functions, letting administrators create dynamic inspection surveys based on attributes and previous answers.',
        'Contributed to the development and maintenance of a reporting tool that created formatted reports based on inspection answers and data, allowing to quickly obtained compliant fire and security results reports.',
        'Development of the backend of a multiplatform mobile app for fire & security inspections, including API development as well as application features and logic, letting users fill out surveys on mobile devices from dynamically selected questions, while also working without a network connection to ensure an interruption free inspection.',
        'Contributed to the development of a mobile social media platform tailored for entrepreneurs and startups to show case their projects, share progress and look for private investors or be selected by government programs.',
        'Maintenance of a booking and travel content management system.',
        'Researched and implemented a company wide code analysis tool to integrate into projects CI/CD pipelines to generate reports on bad coding practices, potential bugs and security problems.'
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
      description: 'Developed applications and libraries for money management devices, enhanching funcionality and integration with third party services.',
      items: [
        'Created applications for end-users, deployed in kiosks with multiple money devices, allowing users to pay services, utilities or make bank transactions, focusing on accesibility and ease of use.',
        'Designed and developed software interfaces for acceptors, dispensers, and other money devices to be used internally for application development or to be offered to customers for their own integration, focusing on usage and features documentation.',
        'Integrated in-house monitoring services on end-user applications, keeping track of money transactions for quality and auditing purposes.',
        'Integrated third-party banking and payment services, expanding payment options and enhancing transaction processing.',
        'Developed and managed web services to support the core functionality of monitoring services.',
        'Managed local and remote databases, ensuring data integrity and availability.',
        'Implemented quality coding practices in the software department, contributing to the overall reliability of the software.',
        'Temporary outsourced at Qualisys to aid in development of SAP Business One addons.'
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
      description: 'Development of innovation oriented projects in different areas. My work was focused on electronics, microcontrollers and software.',
      items: [
        'Created an Android app using Bluetooth LE technology to communicate with an embedded device, controlling ATV headlights to adjust for vehicle movement and ensure optimal illumination and visibility.',
        'Designed and manufactured protective cases for electronic control devices, ensuring durability against environmental factors and strong movements.',
        'Developed an Android app for remote monitoring of ambient conditions in aquaponic greenhouses, improving the life quality of fish and plants while reducing energy consumption.',
        'Developed and implemented a backend system to monitor and collect sensor data from devices, providing historical data to assess the performance of aquaponic greenhouses.',
        'Developed an embedded Android app serving as a user interface for dispensing machines, featuring a QR login system integrated with a companion mobile app to manage user credit and purchase history.',
        'Researched and authored technical reports documenting project details, feasibility, and market studies.',
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
        'Implemented solar tracking algorithms in microcontroller based systems.',
        'Designed and assembled an embedded motor control system for protyping solar trackers.',
        'Designed solar tracking mechanical structures for photovoltaic cells, featuring mechanisms to perform automatic facet canting to increase the energy efficiency of the cells.',
        'Published patent as co-inventor: <em>System and method for the automatic facet canting of heliostats.</em> (Patent Number: MX2015008322A, December 2016).'
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
      description: 'Developed an energy saving control system, focused on school classrooms, based on configurable schedules obtained from a server, reducing manual efforts and providing energy savings to schools.',
      items: [
        'Designed and developed embedded systems to install in classrooms, using infrarred LED to emit sequences to control devices, with an internal memory storing code sequences.',
        'Developed an Android application to create, view and modify classroom schedules to manage air conditioning units automatically.'
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
      description: 'Developed an alternative control system for heliostats solar tracking. An economic and open platform using Arduino, as an alternative to the private systems using CompactRIO by National Instruments.',
      items: [
        'Adapted a solar position algorith to run efficiently on an embedded system with lower hardware specifications.',
        'Developed graphical interfaces to control, monitor, and test solar tracking mechanisms, fine-tuning PID control values for optimal performance.'
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
      description: 'Discord bot focused on the MMO Tibia used in over 15,000 Discord servers. An interactive bot that answers to different commands, handles a user database and does realtime updates based on game events.\nThe project is composed of multiple smaller services and applications to handle data gathering and communication.',
      items: [
        'Developed a service that periodically scrapes the game\'s website in order to detect changes between scans, generating historical data for the players.',
        'Developed a chat bot that offers users synthetized information from the game\'s website, and allows linking their game data to their Discord accounts.',
        'Developed a notification system through Discord that notifies users of game events based on their specific settings.',
        'Recognized as a <b>Promoted Fansite</b> by the game developers, being featured on their official website and being granted additional benefits for being part of their programme.',
        'Implemented automated build, testing and deployment pipelines using GitLab CI/CD, generating Docker images on private registries for deployment.',
        'Migrated of codebase from Python to Kotlin, redesigning the service architecture from scratch for better performance and scalability.',
        'Set up and managed self-managed virtual server on Ubuntu, creating and installing tools for deployment and monitoring of application services.'
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
      description: '',
      items: [
        'Designed and developed an HTTP API serving as the backend for an on-demand medical services mobile application (iOS & Android)',
        'Designed SQL database for application storage, containing users, service history, ratings and more as well as using PostGIS to work with coordinates.',
        'Integrated Stripe services using Stripe Connect workflow for in-app payments.',
        'Integrated of Google Maps API for travel time calculations and geocoding, showing users estimated wait times.',
        'Implemented Firebase Cloud Messaging service to allow communication of events and notifications between the server and mobile applications.',
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
      description: 'Worked on the integration of a third party REST API containing geocoding information and car insurance quote generation.',
      items: [
        'Integrated geocoding and insurance quoting API, and designed models for serialization and database.',
        'Added admin panel sections to manage users, quotation and insurance policies.',
        'Added front-facing sections to web app containing forms to generate quotes.',
        'Cleaned up and made quality improvements in most of the app.'
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
      start: new Date('2018-06-31'),
      description: 'Open source web scrapping library that extracts information from the website Tibia.com and deserializes it into Python data.',
      items: [
        'Designed strongly typed data models to represent the scrapped data into standardized objects.',
        'Developed an asynchronous HTTP client to fetch content HTML content and convert it into Python objects.',
        'Developed a test-driven Python library for the community to use in their own projects without having to worry about data extraction.',
        'Developed GitHub Actions workflows to run unit tests, static code analysis, documentation sites deployment, Docker image building and deployment.'
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
      description: 'Open source Python script that fetches TibiaWiki via its MediaWiki API. Article information is parsed and stored in a SQLite database.',
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
      description: 'Open source Kotlin JVM library to parse Tibia.com content, including a Ktor asynchronous client.',
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
      description: 'Android application and web service featuring a two-sided network for odd jobs.',
      items: [
        'Developed native Android application with geolocation services to find users needing services in a close area.',
        'Integrated Firebase Messaging Service to notify users of job offers and for them to trackt their progress.',
        'Implemented authentication service using Firebase to allow users to sign-in through Google.',
        'Designed SQL database to store user and job data.',
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
      description: 'Open source Android Things library for the RFID module RC522. Handles communication between the module and compatible RFID tags, with support for operations like sector permissions.',
      skills: [
        icons.gradle,
        icons.java,
        icons.android
      ],
      printable: false,
    },
  ],
  skills: [
    { name: 'Python', type: 'Programming Languages', icon: icons.python },
    { name: 'Kotlin', type: 'Programming Languages', icon: icons.kotlin },
    { name: 'C#', type: 'Programming Languages', icon: icons.csharp },
    { name: 'Java', type: 'Programming Languages', icon: icons.java },
    { name: 'JavaScript', type: 'Programming Languages', icon: icons.javascript },
    { name: 'TypeScript', type: 'Programming Languages', icon: icons.typescript },
    { name: 'C++', type: 'Programming Languages', icon: icons.cplusplus },
    { name: 'Android', type: 'Platforms', icon: icons.android },
    { name: '.NET', type: 'Platforms', icon: icons.dotnet },
    { name: 'Node.js', type: 'Platforms', icon: icons.nodejs },
    { name: 'Angular', type: 'Framework/Library', icon: icons.angular },
    { name: 'Pydantic', type: 'Framework/Library', icon: icons.pydantic },
    { name: 'FastAPI', type: 'Framework/Library', icon: icons.fastapi },
    { name: 'aiohttp', type: 'Framework/Library', icon: icons.aiohttp },
    { name: 'Django', type: 'Framework/Library', icon: icons.django },
    { name: 'Material for MkDocs', type: 'Framework/Library', icon: icons.mkdocsMaterial },
    { name: 'Sphinx', type: 'Framework/Library', icon: icons.sphinx },
    { name: 'Read The Docs', type: 'Framework/Library', icon: icons.rtd },
    { name: 'Ktor', type: 'Framework/Library', icon: icons.ktor },
    { name: 'SQLAlchemy', type: 'Framework/Library', icon: icons.sqlAlchemy },
    { name: 'Raspberry Pi', type: 'Platforms', icon: icons.raspberrypi },
    { name: 'Arduino', type: 'Platforms', icon: icons.arduino },
    { name: 'Processing', type: 'Platforms', icon: icons.processing },
    { name: 'Discord', type: 'Platforms', icon: icons.discord },
    { name: 'PostgreSQL', type: 'Databases', icon: icons.postgresql },
    { name: 'MySQL', type: 'Databases', icon: icons.mysql },
    { name: 'SQLite', type: 'Databases', icon: icons.sqlite },
    { name: 'Microsoft SQL Server', type: 'Databases', icon: icons.mssql },
    { name: 'SingleStore', type: 'Databases', icon: icons.singlestore },
    { name: 'Oracle', type: 'Databases', icon: icons.oracle },
    { name: 'Redis', type: 'Databases', icon: icons.redis },
    { name: 'GitHub Actions', type: 'DevOps', icon: icons.githubActions },
    { name: 'GitLab CI/CD', type: 'DevOps', icon: icons.gitlabCiCd },
    { name: 'Docker', type: 'DevOps', icon: icons.docker },
    { name: 'Gradle', type: 'DevOps', icon: icons.portainer },
    { name: 'Portainer', type: 'DevOps', icon: icons.portainer },
    { name: 'nginx', type: 'DevOps', icon: icons.nginx },
    { name: 'Grafana', type: 'DevOps', icon: icons.grafana },
    { name: 'Metabase', type: 'DevOps', icon: icons.metabase },
    { name: 'Prometheus', type: 'DevOps', icon: icons.prometheus },
    { name: 'SonarQube', type: 'DevOps', icon: icons.sonarqube },
    { name: 'Sentry', type: 'DevOps', icon: icons.sentry },
    { name: 'Android Studio', type: 'Tools', icon: icons.androidStudio },
    { name: 'IntelliJ IDEA', type: 'Tools', icon: icons.intelliJ },
    { name: 'PyCharm', type: 'Tools', icon: icons.pycharm },
    { name: 'Visual Studio', type: 'Tools', icon: icons.visualStudio },
    { name: 'Visual Studio Code', type: 'Tools', icon: icons.vsCode },
    { name: 'git', type: 'Tools', icon: icons.git },
    { name: 'Postman', type: 'Tools', icon: icons.postman },
    { name: 'SolidWorks', type: 'Other', icon: icons.solidWorks },
    { name: 'Ubuntu', type: 'Platforms', icon: icons.ubuntu },
    { name: 'Windows', type: 'Platforms', icon: icons.windows },
    { name: 'macOS', type: 'Platforms', icon: icons.macOs },
    { name: 'API Design', type: 'Other' },
    { name: 'PCB Design', type: 'Other' },
    { name: 'Digital Electronics', type: 'Other' }
  ]
};
