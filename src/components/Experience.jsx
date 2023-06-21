import React, { useState, useEffect } from 'react';
import scrollReveal from 'scrollreveal';
import { experienceData } from '../data/experienceData';

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
    <div id="experience" className="p-8 border border-gray-300 rounded-lg my-8 mx-28">
      <p className="text-xl font-bold mb-4">Experiência Profissional</p>
      <div className="flex flex-wrap justify-center">
        {objects.map((object) => (
          <div key={object.id} className="scroll-reveal p-4">
            <p className="text-red-500 text-lg font-medium">{object.company}</p>
            <p className="text-base">{object.jobtitle}</p>
            <p className="text-sm opacity-75">
              {`Ano de Início: ${object.startYear}`}
            </p>
            <p className="text-sm opacity-75">
              {typeof object.endYear === 'string' ? 'Este é meu trabalho atual' : `Ano de Conclusão: ${object.endYear}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
