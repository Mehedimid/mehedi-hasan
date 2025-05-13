const SkillBar = ({ skill, percent }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center text-white font-semibold mb-1">
          <span>{skill}</span>
          <span>{percent}%</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded">
          <div
            className="h-full bg-primary rounded transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  };

  export default SkillBar