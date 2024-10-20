import { useState, useEffect } from 'react';
import {UserForm} from '../UserForm/UserForm'; 
import * as S from './style'; 

export const Header: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <S.header>
      <S.title>COSTUREIRAS DO BAIRRO</S.title>
      <S.btnContainer>
        {isMobile ? (
          <S.hamburger onClick={toggleForm}>&#9776;</S.hamburger>
        ) : (
          <S.btn onClick={toggleForm}>Cadastrar</S.btn>
        )}
      </S.btnContainer>
      {showForm && <UserForm onClose={toggleForm} />}
    </S.header>
  );
};


