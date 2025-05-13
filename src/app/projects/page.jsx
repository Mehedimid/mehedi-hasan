"use client"
import { useState } from "react";
import ProjectCard from "@/components/shared/cards/ProjectCard";
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader";
import { Folder } from "lucide-react";
import {
  allProjects,
  soloProjects,
  teamProjects,
} from "@/components/assets/projectData";
import MotionWrapper from "@/components/shared/motion/MotionWrapper";
import ProjectModal from "@/components/shared/modal/ProjectModal";

const Page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  let filteredProjects = allProjects;
  if (activeTab === "team") filteredProjects = teamProjects;
  else if (activeTab === "solo") filteredProjects = soloProjects;

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const activeClass = "bg-primary text-white";
  const commonTabClass = "px-6 py-2 rounded-3xl sm:text-sm md:text-base";

  return (
    <div className="layout-padding">
      <SectionHeader icon={<Folder />} title="Projects" />

      {/* Tabs */}
      <MotionWrapper direction="down" duration={0.7} className="flex flex-col justify-center items-center mt-5 md:mt-10">
        <div className="flex gap-4 md:gap-10 border border-dashed border-gray-500 rounded-3xl">
          {["all", "team", "solo"].map((tab) => (
            <button
              key={tab}
              className={`${commonTabClass} ${activeTab === tab ? activeClass : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </MotionWrapper>

      {/* Projects */}
      <div className="content-padding grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} data={project} onViewMore={openModal} />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Page;
