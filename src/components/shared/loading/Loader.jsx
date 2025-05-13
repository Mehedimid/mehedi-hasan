import React from 'react';

const Loader = () => {
  return (
    <>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 2s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 z-50 bg-secondary flex flex-col justify-center items-center text-center">
        <div className="flex items-center space-x-4 mb-4">
          <span className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse-slow" />
          <span className="w-4 h-4 rounded-full bg-teal-400 animate-pulse-medium" />
          <span className="w-4 h-4 rounded-full bg-lime-400 animate-pulse" />
          <span className="w-4 h-4 rounded-full bg-green-400 animate-pulse-medium" />
        </div>
        <h1 className="text-white text-xl font-semibold tracking-wide">MEHEDI HASAN</h1>
      </div>
    </>
  );
};

export default Loader;
