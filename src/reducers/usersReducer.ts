// src/reducers/usersReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  phone: string;
  address: {
    state: string;
    city: string;
  }
}

interface UsersState {
  list: User[];
}

const initialState: UsersState = {
  list: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload);
    }
  }
});

export const { setUsers, addUser } = usersSlice.actions;
export default usersSlice.reducer;
