import React, { useState, useEffect } from 'react';
import scrollReveal from 'scrollreveal';
import { experienceData } from '../data/experienceData';
import '../styles/Experience.css';

export default function Experience() {
  const [objects] = useState(experienceData);

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
    <div id="experience" className="experience">
      <p className="title">Experiência Profissional</p>
      <div className="experiences">
        {objects.map((object) => (
          <div key={object.id} className="scroll-reveal">
            <p className="company">{object.company}</p>
            <p className="role">{object.jobtitle}</p>
            <p className="job-years">
              {`Ano de Início: ${object.startYear}`}
            </p>
            <p className="job-years">
              {typeof object.endYear === 'string' ? 'Este é meu trabalho atual'
                : `Ano de Conclusão: ${object.endYear}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
