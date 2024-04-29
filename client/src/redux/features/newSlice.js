import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../constants/api';

export const fetchNews = createAsyncThunk(
	'news/fetchNews',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.getNews();
			localStorage.setItem('news', JSON.stringify(response.data));
			return response.data;
		} catch (err) {
			console.error('Error during fetching news:', err.message);
			if (err.response) {
				return rejectWithValue(err.response.data);
			} else {
				return rejectWithValue(err.message);
			}
		}
	}
);

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
		status: 'idle',
		error: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.news = action.payload;
			})
			.addCase(fetchNews.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload.message;
			});
	},
});

export default newsSlice.reducer;