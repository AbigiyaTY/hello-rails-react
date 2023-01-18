import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingRedux/greetingRedux';

const store = configureStore({
    reducer: {
        greeting: greetingReducer
    }
});

export default store;