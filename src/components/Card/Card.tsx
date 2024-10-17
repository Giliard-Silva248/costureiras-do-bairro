import axios from 'axios';
import * as S from './style';
import { useEffect } from 'react';
import { BsPersonBadge, BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../reducers/usersReducer';

interface User {
  id: number,
  firstName: string,
  lastName: string,
  image: string,
  phone: string,
  address: {
    state: string,
    city: string
  }
}

export const Card: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users?limit=40');
        dispatch(setUsers(response.data.users));
      } catch (error) {
        console.error('Erro ao buscar os dados: ', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const users = useSelector((state: any) => state.users.list);

  return (
    <>
      {users.map((user: User) => (
        <S.card key={user.id}>
          <S.img src={user.image || 'https://robohash.org/default.png'} alt="person" />
          <S.name><BsPersonBadge />{user.firstName} {user.lastName}</S.name>
          <S.phone><BsTelephone />{user.phone}</S.phone>
          <S.address><FiMapPin />{user.address?.city || ''}</S.address>
        </S.card>
      ))}
    </>
  );
};
