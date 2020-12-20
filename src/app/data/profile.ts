export let profile = {
    headline: 'Hello, my name is Allan!',
    aboutMe: 'I am a mechatronics engineer and software developer. I\'m mainly a backend developer, my favorite is Python. I love electronics, gaming and learning new things.',
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
    workExperience: [
        {
            company: 'Encora',
            start: new Date('2020-11-09'),
            logo: 'Encora.png',
            position: 'Software Engineer',
        },
        {
            company: 'Gila Software',
            start: new Date('2019-05-13'),
            end: new Date('2020-10-27'),
            position: 'Software Engineer',
            items: [
                'Development of microservices and orchestrators based on Azure Functions.',
                'Code-First Database design and management.',
                'Application of scrum methodology.',
            ]
        },
        {
            company: 'LyF Ingeniería',
            start: new Date('2018-01-16'),
            end: new Date('2019-05-17'),
            position: 'Software Engineer',
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
            ]
        },
        {
            company: 'I3',
            start: new Date('2015-06-12'),
            end: new Date('2017-12-31'),
            position: 'Consultant',
            description: 'Development of innovation oriented projects in different areas. My work was focused on electronics, microcontrollers and software.',
            items: [
                'Creation of an Android app that uses Bluetooth LE technology to communicate with an embedded device controlling headlights on ATV vehicles.',
                'Design and manufacturing of protective cases for electronic control devices.',
                'Development of an Android app to remotely monitor ambient conditions of Aquaponic greenhouses.',
                'Development and implementation of a small Linux based server providing greenhouse sensors data to client devices.'
            ]
        },
        {
            company: 'Universidad de Sonora',
            start: new Date('2015-03-01'),
            end: new Date('2020-05-01'),
            position: 'Technical Manager Assistant',
            description: 'Assisting the technical manager and planning of the project: <i>Feasibility study of photovoltaic cells for airport gas stations electricity supply</i>.',
            items: [
                'Development of applications and libraries for money management devices.',
                'Design of printed circuit boards.',
                'Design of solar tracking mechanical structures for photovoltaic cells.'
            ]
        },
        {
            company: 'Grupo TEPEI',
            start: new Date('2014-06-01'),
            end: new Date('2014-11-01'),
            position: 'Developer',
            description: 'Developing of an energy saving control system, focus on school classrooms, based on configurable schedules obtained from a server.'
        },
        {
            company: 'Plataforma Solar de Hermosillo',
            start: new Date('2014-01-01'),
            end: new Date('2014-06-01'),
            position: 'Intern Developer',
            description: 'Developing an alternative control system for Heliostats solar tracking. A economic and open platform using Arduino, as an alternative to the private systems using CompactRIO by National Instruments.',
        }
    ]
};
