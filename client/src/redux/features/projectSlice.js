import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProjects } from '../../constants/api';

// Define the thunk for fetching projects
export const fetchProjects = createAsyncThunk(
  'project/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProjects();
      return response.data;
    } catch (err) {
      console.error('Error during fetching projects:', err.message);
      if (err.response) {
        return rejectWithValue(err.response.data);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

// Create a slice for projects
const projectSlice = createSlice({
  name: 'project',
  initialState: {
    project: [], // Change to null
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.project = action.payload.project; // Update project with the array of projects
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default projectSlice.reducer;
