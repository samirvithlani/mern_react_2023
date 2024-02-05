//slicCreate..

import { createSlice } from "@reduxjs/toolkit";

//intaialStat

const initialState = {
  theme: "light",
};

const ThemeSlice = createSlice({
initialState,
  name: "theme",
  reducers: {
    changeTheme: (state, action) => {
        // console.log(state,"theme change")
        return {
            ...state,
            theme: action.payload == true ? "light" : "dark",
          };
    },
  },
});
export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;