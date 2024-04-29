import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCourses } from '../../constants/api';

export const fetchCourses = createAsyncThunk(
    'courses/fetchCourses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getCourses();
            localStorage.setItem('courses', JSON.stringify(response.data));
            return response.data;
        } catch (err) {
            console.error('Error during fetching courses:', err.message);
            if (err.response) {
                return rejectWithValue(err.response.data);
            } else {
                return rejectWithValue(err.message);
            }
        }
    }
);

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        course: [], // Change courses to course
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.course = action.payload.course; // Update to action.payload.course
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
            });
    },
});

export default courseSlice.reducer;
