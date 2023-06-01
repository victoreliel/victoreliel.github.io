import React from 'react';
import {useState, useEffect} from 'react';
import {educationData} from '../data/educationData';
import scrollReveal from 'scrollreveal';
import '../styles/Education.css';

export default function Education() {
  const [object] = useState(educationData);

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
    <div id="education" className="education">
      <p className="title">Formação</p>
      <p className="course scroll-reveal">{object.institution}</p>
      <p className="subtitle scroll-reveal">{object.course}</p>
      <p className="description scroll-reveal">{object.description}</p>
      <p className="description scroll-reveal">
        {`Comecei o curso em abril de ${object.startYear} e concluí em maio de 
        ${object.endYear}`}
      </p>
    </div>
  );
}
