import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CallMeState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    isLoading: boolean;
    isSent: boolean;
    isDone: boolean;
}

const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isLoading: false,
    isSent: false,
    isDone: false,
};

const callMeSlice = createSlice({
    name: 'callMe',
    initialState,
    reducers: {
        setFormValue: (state: CallMeState, action: PayloadAction<{ key: keyof CallMeState, value: string }>) => {
            switch (action.payload.key) {
                case 'name':
                    state.name = action.payload.value;
                    break;
                case 'email':
                    state.email = action.payload.value;
                    break;
                case 'phone':
                    state.phone = action.payload.value;
                    break;
                case 'subject':
                    state.subject = action.payload.value;
                    break;
                case 'message':
                    state.message = action.payload.value;
                    break;

            }
        },
        setIsLoading: (state: CallMeState, action: PayloadAction<{ status: boolean }>) => {
            state.isLoading = action.payload.status;
        },
        setIsSent: (state: CallMeState, action: PayloadAction<{ status: boolean }>) => {
            state.isSent = action.payload.status;
        },
        setIsDone: (state: CallMeState, action: PayloadAction<{ status: boolean }>) => {
            state.isDone = action.payload.status;
        },
        resetForm: (state: CallMeState) => {
            state.name = '';
            state.email = '';
            state.phone = '';
            state.subject = '';
            state.message = '';
        },
    }
});

export const callMeReducer = callMeSlice.reducer;
export const callMeActions = callMeSlice.actions;
