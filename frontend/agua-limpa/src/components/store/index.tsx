import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './../reducers/index';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Defina tipos para o estado raiz (RootState) e ações (Action) da sua aplicação
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
