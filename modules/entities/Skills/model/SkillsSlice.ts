import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    currentTab: 'frontend' as string,
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload;
        }
    }
})

export const skillsReducer = skillsSlice.reducer;
export const skillsActions = skillsSlice.actions;