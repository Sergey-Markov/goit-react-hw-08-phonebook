import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "../redux/phonebook-actions";

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  onChangeFilter,
} = phonebookActions;

const contacts = createReducer([], {
  // [phonebookOperations.fetchContacts.fulfilled]: (_, { payload }) => payload, - если использовать createAsyncThunk
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [onChangeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});
export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});

// const contacts = (state = initialContactsState, { type, payload }) => {
//   switch (type) {
//     case phonebookActionsTypes.ADD:
//       if (state.find((contact) => contact.name === payload.name)) {
//         alert(`${payload.name} is already created!`);
//         return state;
//       }
//       return [...state, payload];

//     case phonebookActionsTypes.DELETE:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case phonebookActionsTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const initialContactsState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
