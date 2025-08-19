import { createSlice } from '@reduxjs/toolkit';

const recentSlice = createSlice({
  name: 'recent',
  initialState: [],
  reducers: {
    addRecent: (state, action) => {
      const recipe = action.payload;
      const existsIndex = state.findIndex(r => r.id === recipe.id);
      if (existsIndex !== -1) {
        state.splice(existsIndex, 1);
      }

      state.unshift(recipe);

      if (state.length > 10) {
        state.pop();
      }
    },
    clearRecent: () => {
      return [];
    }
  },
});

export const { addRecent, clearRecent } = recentSlice.actions;
export default recentSlice.reducer;
