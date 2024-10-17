import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../reducers/usersReducer';
import * as S from './style';

interface UserFormProps {
  onClose: () => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const dispatch = useDispatch();





  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userImage = image || 'https://robohash.org/default.png';
    dispatch(addUser({ 
      id: Date.now(), 
      firstName, 
      lastName, 
      phone, 
      address: { city, state: '' }, 
      image: userImage as string 
    }));
    onClose();
  };

  return (
    <S.form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
        placeholder="Nome" 
        required 
      />
      <input 
        type="text" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
        placeholder="Sobrenome" 
        required 
      />
      <input 
        type="text" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="00 00000-0000" 
        required 
      />
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Cidade" 
        required 
      />
      <input 
        type="file" 
        onChange={handleImageChange} 
      />
      <button type="submit">Adicionar</button>
      <button type="button" onClick={onClose}>Fechar</button>
    </S.form>
  );
};

