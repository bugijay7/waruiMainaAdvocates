import React from 'react';

function Navbar() {
  return (
    <div className="navbar shadow-md px-6 py-8 bg-gray-200">
      <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        
        {/* Left (Logo) */}
        <div className="navbar-start flex items-center">
          <h1 className="text-cyan-900 font-bold text-2xl">W.M.Co.</h1>
        </div> 

        {/* Center (Navigation Links - Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 text-sm font-semibold text-black">
            <li><a href="#hero" className="hover:underline transition">Home</a></li>
            <li><a href="#practice-areas" className="hover:underline transition">Practice Areas</a></li>
            <li><a href="#profile" className="hover:underline transition">Attorneys</a></li>
            <li><a href="#location" className="hover:underline transition">Location</a></li>
            <li><a href="#contact" className="hover:underline transition">Contact</a></li>
          </ul>
        </div>

        {/* Right (CTA Button - Desktop) */}
        <div className="navbar-end hidden lg:flex">
          <a href="#cta">
            <button className="btn btn-outline text-black border-1 border-black py-4 px-3 font-bold hover:bg-cyan-800 hover:text-white hover:border-gray-800 transition">
              Consultation
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-white rounded-lg w-52 text-black space-y-2"
            >
              <li><a href="#hero" className="hover:underline transition">Home</a></li>
              <li><a href="#practice-areas" className="hover:underline transition">Practice Areas</a></li>
              <li><a href="#profile" className="hover:underline transition">Attorneys</a></li>
              <li><a href="#location" className="hover:underline transition">Location</a></li>
              <li><a href="#contact" className="hover:underline transition">Contact</a></li>
              <li>
                <a href="#cta" className="font-semibold text-black hover:underline transition">
                  Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
