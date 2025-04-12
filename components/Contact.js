import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

 const Contact = () => {
    return (
      <section id="contact" className="p-10 text-center bg-gray-900 text-white rounded-md border border-gray-800">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <div className="flex justify-center space-x-5 mt-3">
        <a href="https://github.com/JyothiLakshmiN" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/jyothilakshminagaraj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:jyothilakshmi.cbp@gmail.com" className="hover:text-blue-400">
          <FaEnvelope size={30} />
        </a>
      </div>
    </section>
    );
  }
  
  export default Contact;