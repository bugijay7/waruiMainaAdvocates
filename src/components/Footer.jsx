import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-cyan-800 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center md:text-left">
        {/* Firm Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            warui maina & co. advocates
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Providing reliable legal counsel with integrity, dedication, 
            and a client-first approach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#hero" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="#practice-areas"
                className="hover:text-yellow-500 transition"
              >
                Practice Areas
              </a>
            </li>
            <li>
              <a href="#profile" className="hover:text-yellow-500 transition">
                Attorneys
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex justify-center md:justify-start items-start gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
            <span>
             Kikuyu 1st Floor, <br />Room 2
            </span>
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 text-gray-300 mt-2">
            <FaPhoneAlt className="text-yellow-500" /> +254 707 342 294
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 text-gray-300 mt-2">
            <FaPhoneAlt className="text-yellow-500" /> +254 712 345 678
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 text-gray-300 mt-2 break-words">
            <FaEnvelope className="text-yellow-500" />{" "}
            info@waruimainaadvocates.co.ke
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#"
              className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
            >
              <FaFacebookF className="text-black" />
            </a>
            <a
              href="#"
              className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
            >
              <FaTwitter className="text-black" />
            </a>
            <a
              href="#"
              className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
            >
              <FaLinkedinIn className="text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} warui maina & co. advocates. All
        Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
