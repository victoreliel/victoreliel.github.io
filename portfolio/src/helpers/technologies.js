import React from 'react';

export default function tecnologiesIcons(tecnology) {
  if (tecnology === 'javascript') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="javascript-icon"
      />
    );
  }
  if (tecnology === 'html') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="html-icon"
      />
    );
  }

  if (tecnology === 'css') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="css-icon"
      />
    );
  }
  if (tecnology === 'react') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="react-icon"
      />
    );
  }
  if (tecnology === 'jest') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="jest-icon"
      />
    );
  }
  if (tecnology === 'git') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="git-icon"
      />
    );
  }
  if (tecnology === 'redux') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="redux-icon"
      />
    );
  }
  if (tecnology === 'typescript') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="typescript-icon"
      />
    );
  }
  if (tecnology === 'docker') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="docker-icon"
      />
    );
  }
  if (tecnology === 'nodejs') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="nodejs-icon"
      />
    );
  }
  if (tecnology === 'mongodb') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="mongodb-icon"
      />
    );
  }
  if (tecnology === 'mysql') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        alt="mysql-icon"
      />
    );
  }
  if (tecnology === 'python') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="python-icon"
      />
    );
  }
  return '';
}
