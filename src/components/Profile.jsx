import React from "react";
import profilePic from "../assets/profile.jpeg";

function Profile() {
  return (
    <section 
        id="profile"
        className="py-20 px-6 bg-gray-200 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80">
            <img
              src={profilePic}
              alt="Lead Attorney"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
            {/* Decorative Accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[rgb(41,32,99)] rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Right - Bio */}
        <div className="md:pl-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-800 mb-4">
            P.W. Kamotho
          </h2>
          <h4 className="text-lg font-semibold text-gray-600 mb-6 tracking-wide">
            Advocate of the High Court of Kenya
          </h4>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8 max-w-xl">
            Mr. Kamotho is the founding partner of 
            <span className="font-semibold"> warui maina & co. advocates</span>, 
            a distinguished law firm committed to excellence in legal practice. 
            With broad expertise in corporate law, property law, litigation, and 
            dispute resolution, he has built a reputation for delivering practical, 
            effective, and client-centered solutions. His dedication to integrity 
            and justice has earned the trust of individuals, businesses, and 
            institutions across Kenya.
          </p>
          <button className="px-6 py-3 bg-cyan-800 text-white font-medium rounded-full shadow-md hover:bg-indigo-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
