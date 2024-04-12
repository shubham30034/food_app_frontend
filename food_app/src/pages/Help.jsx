import React, { useState } from 'react';
import Header from './Header'; 
import { useSelector } from "react-redux";

const Help = () => {
  const [activeSection, setActiveSection] = useState('');
  const themeSwitcher = useSelector((store)=> store.theme.switch);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'legal':
        return (
          <div className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>Legal</h2>
            <p className='text-lg'>This is the legal content...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime, facilis perspiciatis
              aliquid illo deserunt eveniet odit saepe, delectus repudiandae incidunt esse,
              numquam atque nam eum! Distinctio praesentium consequuntur unde.
            </p>
          </div>
        );
      case 'faqs':
        return (
          <div className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>FAQs</h2>
            <p className='text-lg'>This is the FAQs content...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime, facilis perspiciatis
              aliquid illo deserunt eveniet odit saepe, delectus repudiandae incidunt esse,
              numquam atque nam eum! Distinctio praesentium consequuntur unde.
            </p>
          </div>
        );
      default:
        return (
          <div className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>Partner Onboarding</h2>
            <p className='text-lg'>This is the partnerOnboarding content</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime, facilis perspiciatis
              aliquid illo deserunt eveniet odit saepe, delectus repudiandae incidunt esse,
              numquam atque nam eum! Distinctio praesentium consequuntur unde.
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      <Header />
      <div className={themeSwitcher ? 'bg-gray-900' : 'bg-gray-100'}>
        <div className='my-4 h-[100vh] w-[80%] mx-auto text-white'>
          <div className='text-center'>
            <h1 className={`${themeSwitcher ? 'text-white' : 'text-black'} text-3xl font-bold`}>Help & Support</h1>
            <p className={`${themeSwitcher ? 'text-white' : 'text-black'} my-5`}>Let's take a step ahead and help you better.</p>
          </div>
          <div className='bg-white text-black grid grid-cols-12'>
            <div className='col-span-4 bg-gray-200 my-10 m-3'>
              <div className='flex items-center gap-6 flex-col my-10 text-2xl font-medium'>
                <button className={`focus:outline-none ${activeSection === 'partnerOnboarding' ? 'shadow-lg' : ''}`} onClick={() => handleSectionClick('partnerOnboarding')}>Partner Onboarding</button>
                <button className={`focus:outline-none ${activeSection === 'legal' ? 'shadow-lg' : ''}`} onClick={() => handleSectionClick('legal')}>Legal</button>
                <button className={`focus:outline-none ${activeSection === 'faqs' ? 'shadow-lg' : ''}`} onClick={() => handleSectionClick('faqs')}>FAQs</button>
              </div>
            </div>
            <div className='col-span-8 my-10 m-3'>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
