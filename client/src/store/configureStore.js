import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/features/authSlice';
import courseReducer from '../redux/features/courseSlice';
import projectReducer from '../redux/features/projectSlice';
import newsReducer from '../redux/features/newSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
        project: projectReducer,
        news: newsReducer,
    },
});
