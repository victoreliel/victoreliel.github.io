/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      email,
      message,
    };

    emailjs
      .send('service_spk2t0f', 'template_dpf7dfo', templateParams, 'r_2PO3HQxKGkBhZ8S')
      .then((response) => {
        console.log('Email Enviado', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log('Erro: ', err);
      });
  };

  return (
    <div className="p-8 border border-gray-300 rounded-lg my-8 mx-4 md:mx-28">
      <p className="text-xl font-bold mb-4">Envie um Email</p>
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
