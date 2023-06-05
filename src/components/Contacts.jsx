import React, { useState, useEffect } from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
  AiFillPhone,
} from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import scrollReveal from 'scrollreveal';
import { contactsData } from '../data/contactsData';
import { socialsData } from '../data/socialsData';
import '../styles/Contacts.css';

export default function Contacts() {
  const [contacts] = useState(contactsData);
  const [socials] = useState(socialsData);

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
    <div id="contacts" className="contacts">
      <p className="title">Contato</p>
      <div className="basic-contact">
        <div className="divisions scroll-reveal">
          <AiOutlineMail />
          <p>{contacts.email}</p>
        </div>
        <div className="divisions scroll-reveal">
          <AiFillPhone />
          <p>{contacts.phone}</p>
        </div>
        <div className="divisions scroll-reveal">
          <SiGooglemaps />
          <p>{contacts.address}</p>
        </div>
      </div>
      <p className="title">Redes Sociais</p>
      <ul className="socials">
        <div className="scroll-reveal row">
          <AiFillGithub />
          <li>
            <a href={socials.github} className="social">Github</a>
          </li>
        </div>
        <div className="scroll-reveal row">
          <AiFillLinkedin />
          <li>
            <a href={socials.linkedin} className="social">Linkedin</a>
          </li>
        </div>
        <div className="scroll-reveal row">
          <AiFillFacebook />
          <li>
            <a href={socials.facebook} className="social">Facebook</a>
          </li>
        </div>
        <div className="scroll-reveal row">
          <AiFillInstagram />
          <li>
            <a href={socials.instagram} className="social">Instagram</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
