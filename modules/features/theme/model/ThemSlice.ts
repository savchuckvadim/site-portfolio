import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';

//TYPES
export type ThemeState = typeof initialState;
export type ThemeType = 'violete' | 'default' | 'blue' | 'pink';
export type ModeType = 'light' | 'dark';

const initialState = {
    theme: 'default' as ThemeType,
    mode: 'light' as ModeType,
    isMounted: false as boolean,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setIsMounted: (
            state: ThemeState,
            action: PayloadAction<{ status: boolean }>,
        ) => {
            state.isMounted = action.payload.status;
        },

        setTheme: (
            state: ThemeState,
            action: PayloadAction<{ theme: ThemeType }>,
        ) => {
            state.theme = action.payload.theme;
        },

        setMode: (
            state: ThemeState,
            action: PayloadAction<{ mode: 'light' | 'dark' }>,
        ) => {
            state.mode = action.payload.mode;
        },
    },
});

//utils

export const themeReducer = themeSlice.reducer;

// Экспорт actions
export const themeActions = themeSlice.actions;
