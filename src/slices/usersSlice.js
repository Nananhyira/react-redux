import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    count: 10,
    number: 0,
    
  };
 
  const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        increaseCount: (state) => {
            state.count += 1;
        },
        addNumber: (state) => {
            state.addNumber += 2;
        },
    },
  });

  export const {addUser, addNumber, increaseCount} = usersSlice.actions;

  export default usersSlice.reducer;
