import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./phonebook-reducer";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
  blacklist: ["filter", "currentContacts"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    phonebook: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// eslint-disable-next-line
export const persistor = persistStore(store);
