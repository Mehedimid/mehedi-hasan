"use client"
import { fonts } from "../FontDisplay";

const SectionHeader = ({ icon, title }) => {
  return (
    <div className="flex justify-center md:justify-between items-center gap-3 pb-2 border-b border-gray-500">
      <h2 className={`text-2xl md:text-4xl font-playfair font-bold text-primary ${fonts.playfair.className}`}>{title}.</h2>
      <div className="text-primary text-2xl md:text-4xl font-bold">{icon}</div>
    </div>
  );
};

export default SectionHeader;
