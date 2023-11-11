import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        isSearchOpen: false
    },
    reducers: {
        toggleMenu: (state, action) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state, action) => {
            state.isMenuOpen = false
        },
        toggleSearch: (state)=>{
            state.isSearchOpen = !state.isSearchOpen
        }
    }
})

export const { toggleMenu, closeMenu, toggleSearch } = appSlice.actions
export default appSlice.reducer;