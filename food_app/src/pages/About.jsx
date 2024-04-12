import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from 'react-redux';
import Header from './Header';

const About = () => {
  const container = useRef(null);
  const darkMode = useSelector((store) => store.theme.switch);

  useGSAP((context, contextSafe) => {
    gsap.from(".box", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "back",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, { scope: container });

  return (
    <>
    <Header/>
    <div ref={container} className={`min-h-screen py-10 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`shadow-md p-6 rounded-lg box ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold mb-3">Our Story</h2>
            <h1> Integer at nulla eget turpis interdum efficitur. Vestibulum tempus ipsum nec tellus dapibus, id malesuada odio bibendum.
            </h1>
          </div>
          <div className={`shadow-md p-6 rounded-lg box ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <h1> Integer at nulla eget turpis interdum efficitur. Vestibulum tempus ipsum nec tellus dapibus, id malesuada odio bibendum.
            </h1>
          </div>
          <div className={`shadow-md p-6 rounded-lg box ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold mb-3">Our Values</h2>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">Quality food</li>
              <li className="text-gray-700">Customer satisfaction</li>
              <li className="text-gray-700">Community involvement</li>
            </ul>
          </div>
          <div className={`shadow-md p-6 rounded-lg box ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold mb-3">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <img src="team-member-1.jpg" alt="Team Member 1" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="text-gray-800 font-semibold">John Doe</h3>
                
                  <p className="text-gray-600">Chef</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="team-member-2.jpg" alt="Team Member 2" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="text-gray-800 font-semibold">Jane Smith</h3>
                  <p className="text-gray-600">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
