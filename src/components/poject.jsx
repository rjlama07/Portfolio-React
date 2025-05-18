import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import playstoreIcon from "../assets/projects/playstore.svg";

const Project = () => {
  return (
    <div className="pb-4 border-neutral-900 border-b">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              key={index}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}

              {/* Store Links */}
              <div className="mt-4 flex space-x-4">
                {project.playStoreLink && (
                  <a
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-900 hover:text-purple-700 hover:scale-105 transition"
                  >
                    <img
                      src={playstoreIcon} // Replace with the path to your Play Store icon
                      alt="Play Store"
                      className="w-5 h-5 mr-1"
                    />
                    Play Store
                  </a>
                )}
                {project.appStoreLink && (
                  <a
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-900 hover:text-purple-700 hover:scale-105 transition"
                  >
                    <img
                      src="/assets/appstore-icon.svg" // Replace with the path to your App Store icon
                      alt="App Store"
                      className="w-5 h-5 mr-1"
                    />
                    App Store
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
