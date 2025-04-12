"use client";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Hi, I'm <div className="inline-block">
              <span className="text-blue-500">Jyothi Lakshmi</span> <span className="text-purple-500">N</span>
            </div>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-8">Software Engineer | Frontend Developer | Web-developer | AI
              Enthusiast</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto lg:mx-0"> Passionate Software Engineer with 7+ years of experience building scalable,
                high-performance web applications. Skilled in the full software development lifecycle, 
                RESTful API design, and A/B testing to optimize user experience and application performance. 
                Currently exploring AI integration in frontend frameworks to create intelligent and adaptive interfaces.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://leetcode.com/u/jyothi1995/" // Replace with your actual LeetCode link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/8/8d/LeetCode_logo.png" // LeetCode logo URL
                  alt="LeetCode"
                  className="w-5 h-5" // Adjust size as needed
                />
                <span>LeetCode</span>
              </a>
              <a href="https://www.linkedin.com/in/jyothilakshminagaraj/" target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"><svg
                  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                  className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                  </path>
                </svg><span>LinkedIn</span></a>
              <a href="mailto:jyothilakshmi.cbp@gmail.com"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center space-x-2"><svg
                  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                  className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg><span>Gmail</span></a></div>
          </div>
          <div className="order-first lg:order-last flex justify-center items-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow">
              </div>
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;