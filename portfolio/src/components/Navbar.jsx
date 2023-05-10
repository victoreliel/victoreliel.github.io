import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <div id="navbar" className="navbar">
      <div className="navbar-container">
         <NavLink
           to="/"
           smooth
           duration={ 2000 }
           className="navlink-item"
         >
           <button
            type="button"
           >
             <span>
               Home
             </span>
           </button>
         </NavLink>

         <NavLink
           to="/#about"
           smooth
           duration={ 2000 }
           className="navlink-item"
         >
           <button
            type="button"
           >
             <span>
               Sobre mim
             </span>
           </button>
         </NavLink>

         <NavLink
           to="/#skills"
           smooth
           duration={ 2000 }
           className="navlink-item"
         >
           <button
            type="button"
           >
             <span>
               Skills
             </span>
           </button>
         </NavLink>

         <NavLink
           to="/#projects"
           smooth
           duration={ 2000 }
           className="navlink-item"
         >
           <button
            type="button"
           >
             <span>
               Projetos
             </span>
           </button>
         </NavLink>

         <NavLink
           to="/#education"
           smooth
           duration={ 2000 }
           className="navlink-item"
         >
           <button
            type="button"
           >
             <span>
               Educação
             </span>
           </button>
         </NavLink>

         <NavLink
           to="/#experience"
           smooth
           duration={ 2000 }
           className="navlink-item"
         >
           <button
            type="button"
           >
             <span>
               Experiência
             </span>
           </button>
         </NavLink>

         <NavLink
           to="/#contact"
           smooth
           duration={ 2000 }
           className="navlink-item"
         >
           <button
            type="button"
           >
             <span>
               Contato
             </span>
           </button>
         </NavLink>
      </div>
    </div>
  )
}
