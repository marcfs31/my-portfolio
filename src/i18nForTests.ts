import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: {
        title: "Marc Fors",
        subtitle: "Software Engineer",
        about: "About Me",
        contact: "Contact",
        email: "Email",
        linkedin: "LinkedIn",
        toggle_dark_mode: "Toggle Dark Mode",
        dynatrace_title: "Software Engineer at Dynatrace",
        dynatrace_duration: "May 2022 - Present",
        dynatrace_description: "Currently, I am enhancing the functionality and performance of Dynatrace's third-generation web applications using React. My previous work involved developing second-generation applications using Angular and TypeScript. I focus on delivering high-quality software solutions by utilizing modern development practices and tools.",
        crealogix_title: "Software Engineer at CREALOGIX Group",
        crealogix_duration: "May 2020 - May 2022",
        crealogix_description: "At CREALOGIX Group, I developed and maintained front-end applications for the corporate banking sector using Angular 10. I was responsible for both mobile and desktop applications, ensuring seamless user experiences across platforms.",
        tsystems_junior_title: "Junior Software Developer at T-Systems Iberia",
        tsystems_junior_duration: "Sep 2019 - Apr 2020",
        tsystems_junior_description: "As a Junior Software Developer, I honed my skills in Java 7-8 and Spring for building REST APIs consumed by Angular front-end applications. I gained proficiency in front-end development with Angular, TypeScript, JavaScript, CSS3, and HTML5.",
        tsystems_apprentice_title: "Software Developer at T-Systems Iberia (Apprenticeship)",
        tsystems_apprentice_duration: "Jun 2018 - Jun 2019",
        tsystems_apprentice_description: "During my apprenticeship, I developed core competencies in professional software development, including Java 7-8 programming with Struts and Spring frameworks. I also gained expertise in relational databases such as Oracle and SQL Server.",
        lifeinformatica_title: "Computer Repair Technician at LIFE Informatica (Apprenticeship)",
        lifeinformatica_duration: "Sep 2016 - Mar 2017",
        lifeinformatica_description: "In this role, I developed hands-on experience in assembling and repairing PCs and servers. I also acquired skills in installing and configuring operating systems, including Windows and Linux."
      }
    }
  }
});

export default i18n;
