import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./phonebook-reducer";
import logger from "redux-logger";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "currentContacts",
//   storage,
//   blacklist: ["filter"],
// };

// const myMiddleware = (store) => (next) => (action) => {
//   console.log("My middleware for example");
//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

const store = configureStore({
  reducer: {
    // phonebook: persistReducer(persistConfig, contactsReducer),
    phonebook: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// eslint-disable-next-line
export default store;

// export default { store, persistor };
