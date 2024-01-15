import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contacts';
import { filterReducer } from './todoList/filterSlice';
import { tasksReducer } from './todoList/tasksSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: authReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
