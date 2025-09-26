import React from 'react';

function Navbar() {
  return (
    <div className="navbar shadow-md px-6 py-4 bg-gray-200">
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
            <button className="btn btn-outline text-black border border-black py-2 px-4 font-bold hover:bg-cyan-800 hover:text-white hover:border-cyan-800 transition">
              Consultation
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-black p-2">
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
              className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-white rounded-lg w-56 text-black space-y-2"
            >
              <li><a href="#hero" className="hover:text-cyan-800 transition">Home</a></li>
              <li><a href="#practice-areas" className="hover:text-cyan-800 transition">Practice Areas</a></li>
              <li><a href="#profile" className="hover:text-cyan-800 transition">Attorneys</a></li>
              <li><a href="#location" className="hover:text-cyan-800 transition">Location</a></li>
              <li><a href="#contact" className="hover:text-cyan-800 transition">Contact</a></li>
              <li>
                <a
                  href="#cta"
                  className="font-semibold text-cyan-900 border border-cyan-900 py-2 px-3 rounded-lg hover:bg-cyan-800 hover:text-white transition block text-center"
                >
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
