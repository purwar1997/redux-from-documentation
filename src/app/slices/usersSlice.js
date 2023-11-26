import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Akshay Saini' },
  { id: '2', name: 'Arpit Bhayani' },
  { id: '3', name: 'Kailash Nadh' },
  { id: '4', name: 'Hitesh Choudhary' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
