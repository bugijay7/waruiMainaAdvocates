import React from 'react';

function ContactFormMap() {
  return (
    <section
      id="location"
      className="py-16 px-6 sm:px-10 md:px-16 bg-gray-200"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800">
          Our Location
        </h2>
        <p className="mt-2 text-gray-600 text-base sm:text-lg">
          Visit us at our offices — we are always ready to serve you.
        </p>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto relative w-full h-[450px]">
        <iframe
          title="Warui Maina & Co. Advocates Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7484975182534!2d36.66304807496514!3d-1.2451851355972235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f5bbe3014e9%3A0x16bf2c09c1aa7523!2sWarui%20Maina%20%26%20Co.%20Advocates!5e0!3m2!1sen!2ske!4v1727266950000!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactFormMap;
