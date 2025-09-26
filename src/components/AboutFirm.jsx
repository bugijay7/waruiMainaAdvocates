import React from "react";

function AboutFirm() {
  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-10 md:px-16 lg:px-20 bg-gray-200 text-black"
    >
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-cyan-800">
          About Warui Maina & Co. Advocates
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black mb-6">
          <span className="font-semibold text-cyan-800">Warui Maina & Co. Advocates</span> 
          is a reputable law firm committed to providing clear, practical, and 
          results-driven legal solutions for individuals, businesses, and institutions. 
          With a foundation built on integrity, professionalism, and client-focused service, 
          we aim to deliver outcomes that truly protect and advance our clients’ interests.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black">
          Our dedicated team blends extensive legal expertise with personalized attention, 
          ensuring every client receives tailored guidance and strong representation. 
          Whether it’s advisory services or courtroom advocacy, we are steadfast in 
          safeguarding your rights and walking with you through every step of your legal journey.
        </p>
      </div>
    </section>
  );
}

export default AboutFirm;
