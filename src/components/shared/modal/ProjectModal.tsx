import { X, ExternalLink } from "lucide-react";
import Title from "../sectionHeader/Title";
import SecondaryTitle from "../sectionHeader/SecondaryTitle";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-[#252525] text-white w-full max-w-4xl max-h-[90vh] rounded-md overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-black rounded-full p-1 shadow-md hover:text-primary z-10"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto max-h-[90vh] space-y-8">
          {/* Title + Subtitle */}
          <div>
            <Title text={project.title} />
            <p className="text-gray-300 text-sm mt-1 italic">{project.subtitle}</p>
          </div>

          {/* Description */}
          <div>
            <SecondaryTitle text="Project Description" />
            <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <SecondaryTitle text="Frontend" />
              <p className="text-sm text-gray-300">{project.frontEnd}</p>
            </div>
            <div>
              <SecondaryTitle text="Backend" />
              <p className="text-sm text-gray-300">{project.backEnd}</p>
            </div>
          </div>

          {/* Features */}
          {project.features?.length > 0 && (
            <div>
              <SecondaryTitle text="Features" />
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-semibold flex items-center gap-1 hover:text-white transition"
              >
                Live Site <ExternalLink size={16} />
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-semibold flex items-center gap-1 hover:text-white transition"
              >
                Code Repository <ExternalLink size={16} />
              </a>
            )}
          </div>

          {/* Preview Image */}
          {project.image && (
            <div>
              <img
                src={project.image}
                alt="Project Preview"
                className="w-full h-auto rounded-md shadow"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
