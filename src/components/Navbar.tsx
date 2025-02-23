import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 inline-block mr-2" />
          CBIT Cyber Security Club
        </div>
        <div>
          {/* Add navigation links here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
