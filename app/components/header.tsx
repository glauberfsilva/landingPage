"use client"; // Indica que este componente é um Client Component, necessário para usar hooks como useState

import React, { useState } from 'react';
import '../styles/styles.css'; // Importa os estilos CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu quando o botão é clicado
  };

  return (
    <header id="inicio" className="header-dark">
      <div className="container mx-auto flex p-5 items-center justify-between relative">
        {/* Logo da empresa */}
        <a className="flex title-font font-medium items-center text-white customLogo">
          <img src="/images/logo-agency-tecnology.png" alt="logo-agency-tecnology" className="imgLogo" />
        </a>
        
        {/* Botão de toggle para abrir/fechar o menu em dispositivos móveis */}
        <button
          onClick={toggleMenu}
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${
            isMenuOpen ? 'text-black bg-white' : 'text-gray-500 bg-transparent' // Define a cor do texto como preto e o fundo como branco quando o menu está aberto
          } rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:${
            isMenuOpen ? 'text-black bg-white' : 'text-gray-400 bg-transparent' // Define a cor do texto como preto e o fundo como branco no modo dark quando o menu está aberto
          } dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span> {/* Texto para leitores de tela */}
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            {/* Ícone de menu (três linhas horizontais) */}
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        {/* Menu de navegação */}
        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto absolute top-full left-0 ${isMenuOpen ? 'bg-black' : 'bg-gray-800'} md:static md:bg-transparent`}
          id="navbar-default"
        >
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${isMenuOpen ? 'bg-black' : 'bg-gray-50'} md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:${isMenuOpen ? 'bg-black' : 'bg-gray-800'} md:dark:bg-transparent dark:border-gray-700`}>
            {/* Links de navegação */}
            <li>
              <a href="#inicio" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                INICIO
              </a>
            </li>
            <li>
              <a href="#sobrenos" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                SOBRE
              </a>
            </li>
            <li>
              <a href="#servicos" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                SERVIÇOS
              </a>
            </li>
            <li>
              <a href="#cases" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                CASES
              </a>
            </li>
            <li>
              <a href="#infra" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                INFRA
              </a>
            </li>
            <li>
              <a href="#contato" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                CONTATO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
