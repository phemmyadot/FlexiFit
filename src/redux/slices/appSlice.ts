import {createSlice} from '@reduxjs/toolkit';

export interface InitialState {
  isLoading: boolean;
}

const initialState: InitialState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    stopLoading: state => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoading, stopLoading} = appSlice.actions;

export default appSlice.reducer;
