import React, { useEffect } from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import scrollReveal from 'scrollreveal';
import { contactsData } from '../data/contactsData';

export default function Contacts() {
  const contacts = contactsData;

  useEffect(() => {
    const handleResize = () => {
      scrollReveal().sync();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;

  useEffect(() => {
    scrollReveal().reveal('.scroll-reveal', {
      duration: 500,
      distance: '20px',
      origin: 'bottom',
      easing: 'ease-in-out',
      delay: 100,
      interval: 200,
      reset: true,
    });
  }, []);

  return (
    <div id="contacts" className="p-8 border border-gray-300 rounded-lg my-8 mx-4 md:mx-28">
      <p className="text-xl font-bold mb-4">Contato</p>
      <div className={`flex ${isLargeScreen ? 'flex-wrap justify-center' : 'flex-col items-center'} gap-4 ${isLargeScreen ? 'scroll-reveal' : ''}`}>
        {Object.entries(contacts).map(([key, value]) => (
          <div key={key} className={`${isLargeScreen ? 'scroll-reveal' : ''}`}>
            {key === 'email' && (
              <div className="flex items-center">
                <AiOutlineMail className="inline-block text-2xl mr-2" />
                <p className="text-lg text-red-500 font-medium">{value}</p>
              </div>
            )}
            {key === 'phone' && (
              <div className="flex items-center">
                <AiFillPhone className="inline-block text-2xl mr-2" />
                <p className="text-lg text-red-500 font-medium">{value}</p>
              </div>
            )}
            {key === 'address' && (
              <div className="flex items-center">
                <SiGooglemaps className="inline-block text-2xl mr-2" />
                <p className="text-lg text-red-500 font-medium">{value}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
