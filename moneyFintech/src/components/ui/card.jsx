import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div
      className={`rounded-2xl border border-gray-300 shadow-md p-4 bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="text-gray-800">{children}</div>;
};
