/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { ExternalLink } from "lucide-react"; 
import SecondaryTitle from "../sectionHeader/SecondaryTitle";
import PrimaryButton from "@/components/shared/button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import MotionWrapper from "../motion/MotionWrapper";


function ProjectCard({ data, onViewMore }) {
  return (
    <MotionWrapper direction="up" duration={0.6}>
      <div className="relative h-[300px] rounded-[15px] overflow-hidden group shadow shadow-primary">
        <img
          src={data.image}
          alt="Project"
          className="w-full h-full object-cover transition-opacity duration-500 lg:group-hover:opacity-75"
        />

        {data.liveLink && (
          <a
            href={data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 text-white bg-black/60 hover:bg-primary p-2 rounded-full transition-colors duration-300"
            title="Live Link"
          >
            <ExternalLink size={18} />
          </a>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 lg:bg-primary/70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
          <div className="text-white text-center relative w-full h-full flex flex-col justify-center items-center overflow-hidden space-y-2">
            <div className="translate-y-0 lg:translate-y-[-50px] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
              <SecondaryTitle text={data.title} />
            </div>

            {/* View more triggers modal */}
            <MotionWrapper direction="up" duration={0.2} className="lg:hidden">
              <PrimaryButton text="View more" onClick={() => onViewMore(data)} />
            </MotionWrapper>
            <MotionWrapper direction="up" duration={0.2} className="hidden lg:block border border-white hover:shadow-md hover:shadow-white transition-all duration-200" >
              <SecondaryButton text="View more" onClick={() => onViewMore(data)} />
            </MotionWrapper>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}


export default ProjectCard;
