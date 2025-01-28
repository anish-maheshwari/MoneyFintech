import React, { useState } from 'react';

export const Select = ({ children, className }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
    </div>
  );
};

export const SelectTrigger = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SelectContent = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className="absolute mt-2 w-full border border-gray-300 bg-white rounded-lg shadow-lg z-10">
        {children}
      </div>
    )
  );
};

export const SelectItem = ({ children, onClick }) => {
  return (
    <div
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
