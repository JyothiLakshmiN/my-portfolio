"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022 – 2024",
    title: "Software Engineer 3",
    company: "Walmart Global Tech INDIA",
    description: "Built and automated migration using code mod for Blue steel Design System, reducing manual effort by 80%. Developed Tires and Battery Centre features and advanced error handling for cart and checkout. Implemented new immunization vaccine features in the Sam’s Club Pharmacy platform. Introduced a 'Multi-patient Single RX Order' feature, boosting the value of orders by 20%. Improved UX and system reliability for the Sam's Club Next web app using modern technologies."
  },
  {
    year: "2021 – 2022",
    title: "Senior Software Engineer",
    company: "Altran Technologies",
    description: "Contributed to the SSP|SEAS (IBM) enterprise application, focusing on modernizing and enhancing the user interface for improved usability and performance. Partnered with various teams and effectively communicated with stakeholders to gather requirements and deliver scalable, high-quality solutions."
  },
  {
    year: "2019 – 2021",
    title: "Software Engineer",
    company: "6D Technologies",
    description: "Implemented Digital Network Services: Successfully developed prepaid, postpaid, and device management features for the Ooredoo project which boosted orders by 20%. Acted as the team representative for resolving production bug fixes, ensuring timely and efficient issue resolution."
  },
  {
    year: "2017 – 2019",
    title: "Software Engineer",
    company: "Vunet Systems",
    description: "Implemented new adapters in Kibana to collect data from Logstash for analyzing for VuSmartMaps platform. Added new visualization called Unified Transaction Map to show the network of all routers and its status. Migrated all features added on Kibana from old version 4 to new version 6.1."
  }
];

const ExperienceStepper = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 rounded-md border border-gray-800 bg-gray-900/50">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="relative border-l-4 border-blue-500 pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="mb-10"
          >
            <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} - {exp.year}</p>
            <p className="text-gray-500 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceStepper;
