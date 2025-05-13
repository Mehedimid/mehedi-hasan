import { fonts } from "../FontDisplay";

const Title = ({text}) => {
  return (
    <div className={`${fonts.playfair.className}`}>
      <h2 className="uppercase text-xl md:text-2xl font-bold text-white relative inline-block mb-3 md:mb-6">
        {text? text : "Section Title"}
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-sky-500 rounded"></span>
      </h2>
    </div>
  );
};

export default Title;
