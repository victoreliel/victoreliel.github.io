import React, {useState} from 'react';
import {contactsData} from '../data/contactsData';

export default function Contacts() {
  const [object] = useState(contactsData);

  return (
    <div id="contacts">
      <h1>Contacts</h1>
      <a href={object.linkedin}>Meu Perfil no Linkedin</a>
      <p>{`Email: ${object.email}`}</p>
      <p>{`Telefone: ${object.phone}`}</p>
      <p>{`Endereço: ${object.address}`}</p>
    </div>
  );
}
