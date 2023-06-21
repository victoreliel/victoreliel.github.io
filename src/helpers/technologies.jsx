import React from 'react';

export default function technologiesIcons(technology) {
  if (technology === 'javascript') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="javascript-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'html') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="html-icon"
        className="icon-size"
      />
    );
  }

  if (technology === 'css') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="css-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'react') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="react-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'jest') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="jest-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'git') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="git-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'redux') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="redux-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'typescript') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="typescript-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'docker') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="docker-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'nodejs') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="nodejs-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'mongodb') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="mongodb-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'mysql') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        alt="mysql-icon"
        className="icon-size"
      />
    );
  }
  if (technology === 'python') {
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="python-icon"
        className="icon-size"
      />
    );
  }
  return null;
}
