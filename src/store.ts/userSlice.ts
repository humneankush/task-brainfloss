import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    role: string;
}

const initialState: UserState = {
    username: '',
    role: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.username = action.payload.username;
            state.role = action.payload.role;
        },
        updateRole(state, action: PayloadAction<string>) {
            state.role = action.payload;
        },
    },
});

export const { setUser, updateRole } = userSlice.actions;
export default userSlice.reducer;
