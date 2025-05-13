"use client"
import { fonts } from "../FontDisplay";

const SecondaryTitle = ({text}) => {
  return (
    <div>
      <h1 className={`capitalize text-2xl font-bold mb-2 ${fonts.playfair.className}`}>
        {text || "UI/UX Designer & Developer"}
      </h1>
    </div>
  );
};

export default SecondaryTitle;
