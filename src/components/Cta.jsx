import React from "react";

function Cta() {
  return (
    <section 
      id="cta"
      className="bg-cyan-800 py-16 px-6 text-center text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Legal Assistance?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          At <span className="font-semibold text-yellow-500">warui maina & co. advocates</span>, 
          we are committed to providing clear, practical, and dependable legal solutions. 
          Schedule a consultation today and let our team guide you with confidence and expertise.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Book Consultation
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-gray-900 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
