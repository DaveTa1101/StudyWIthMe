import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {loginApi, signupApi} from '../../constants/api';


export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            console.log('email:', email, 'password:', password);
            const response = await loginApi({ email, password }); // Pass parameters as an object
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const signup = createAsyncThunk(
    'auth/signup',
    async ({ email, password, username }, { rejectWithValue }) => {
        try {
            console.log('email:', email, 'password:', password, 'name:', username);
            const response = await signupApi({ email, password, username }); // Pass parameters as an object
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                console.error('Login rejected with payload:', action.payload);
                state.status = 'failed';
                state.error = action.payload.message;
            })
            .addCase(signup.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                console.error('Signup rejected with payload:', action.payload);
                state.status = 'failed';
                state.error = action.payload.message;
            });
    },
});

export default authSlice.reducer;