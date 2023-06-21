import React, { useState, useEffect } from 'react';
import {
  AiOutlineCloudDownload,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineLink,
} from 'react-icons/ai';
import { aboutData } from '../data/aboutData';
import { socialsData } from '../data/socialsData';
import ProfilePicture from '../assets/profile.jpg';
import curriculum from '../assets/Currículo.pdf';

function renderSocialIcon(socialId) {
  switch (socialId) {
    case 'github':
      return <AiFillGithub className="text-xl" />;
    case 'linkedin':
      return <AiFillLinkedin className="text-xl" />;
    case 'whatsapp':
      return <AiOutlineWhatsApp className="text-xl" />;
    case 'repository':
      return <AiOutlineLink className="text-xl" />;
    default:
      return null;
  }
}

export default function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div id="about" className="p-8 pt-24 border border-gray-300 rounded-lg mx-4 md:mx-28">
      <p className="text-xl font-bold mb-4">Sobre Mim</p>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        {!isMobile && (
          <img src={ProfilePicture} alt="foto de perfil" className="pp w-48 h-48 rounded-full mb-6 md:mb-0" />
        )}
        <div className="md:ml-8">
          <p className="text-2xl font-semibold mb-2">Victor Eliel Ferranti Macedo</p>
          <p className="text-lg text-red-600 font-medium mb-4">Full Stack Web Developer</p>
          <p className="mb-4">{aboutData.description1}</p>
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center text-lg mb-2 md:mb-0">
              <AiOutlineCloudDownload className="mr-2" />
              <a href={curriculum} download className="text-red-600">Baixar Currículo</a>
            </div>
            <div className="flex items-center mt-2 md:mt-0 md:ml-4">
              {socialsData.map((social, index) => (
                <React.Fragment key={social.id}>
                  {index !== 0 && <div className="mx-2 h-5 border-l border-gray-400" />}
                  <a href={social.link} className="ml-2" target="_blank" rel="noopener noreferrer">
                    {renderSocialIcon(social.id)}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
