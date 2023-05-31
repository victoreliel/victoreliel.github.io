import React, {useState} from 'react';
import {
  AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiOutlineMail,
  AiFillPhone,
} from 'react-icons/ai';
import {SiGooglemaps} from 'react-icons/si';
import {contactsData} from '../data/contactsData';
import {socialsData} from '../data/socialsData';
import '../styles/Contacts.css';

export default function Contacts() {
  const [contacts] = useState(contactsData);
  const [socials] = useState(socialsData);

  return (
    <div id="contacts" className="contacts">
      <p className="title">Contato</p>
      <div className="basic-contact">
        <div className="divisions">
          <AiOutlineMail/>
          <p>{contacts.email}</p>
        </div>
        <div className="divisions">
          <AiFillPhone/>
          <p>{contacts.phone}</p>
        </div>
        <div className="divisions">
          <SiGooglemaps/>
          <p>{contacts.address}</p>
        </div>
      </div>
      <p className="title">Redes Sociais</p>
      <ul className="socials">
        <AiFillGithub/>
        <li>
          <a href={socials.github} className="social">Github</a>
        </li>
        <AiFillLinkedin/>
        <li>
          <a href={socials.linkedin} className="social">Linkedin</a>
        </li>
        <AiFillFacebook/>
        <li>
          <a href={socials.facebook} className="social">Facebook</a>
        </li>
        <AiFillInstagram/>
        <li>
          <a href={socials.instagram} className="social">Instagram</a>
        </li>
      </ul>
    </div>
  );
}
