import React, {useState} from 'react';
import {contactsData} from '../data/contactsData';
import {socialsData} from '../data/socialsData';
import '../styles/Contacts.css';

export default function Contacts() {
  const [contacts] = useState(contactsData);
  const [socials] = useState(socialsData);

  return (
    <div id="contacts">
      <h1>Contacts</h1>
      <p>{`Email: ${contacts.email}`}</p>
      <p>{`Telefone: ${contacts.phone}`}</p>
      <p>{`Endereço: ${contacts.address}`}</p>
      <h2>Socials</h2>
      <ul>
        <li>
          <a href={socials.github}>Github</a>
        </li>
        <li>
          <a href={socials.linkedin}>Linkedin</a>
        </li>
        <li>
          <a href={socials.facebook}>Facebook</a>
        </li>
        <li>
          <a href={socials.instagram}>Instagram</a>
        </li>
      </ul>
    </div>
  );
}
