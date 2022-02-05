import { createSlice } from "@reduxjs/toolkit";

const DarkModeSlice = createSlice({
  name: "darkModes",
  initialState: { darkModeData: false },
  reducers: {
    switchDarkMode: (state, action) => {
      state.darkModeData = action.payload;
    },
  },
});

export const { switchDarkMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
