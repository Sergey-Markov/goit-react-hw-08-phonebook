import axios from "axios";
import phonebookActions from "./phonebook-actions";
axios.defaults.baseURL = "http://localhost:7777";

const fetchContacts = () => async (dispatch) => {
  dispatch(phonebookActions.fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(phonebookActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phonebookActions.fetchContactsError(error));
  }
};

const addContacts = (newContact) => (dispatch) => {
  const contact = newContact;
  dispatch(phonebookActions.addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(phonebookActions.addContactsSuccess(data)))
    .catch((error) => dispatch(phonebookActions.addContactsError(error)));
};

const deleteContacts = (contactId) => (dispatch) => {
  dispatch(phonebookActions.deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) =>
      dispatch(phonebookActions.deleteContactsSuccess(contactId))
    )
    .catch((error) => dispatch(phonebookActions.deleteContactsError(error)));
};

// eslint-disable-next-line
export default { addContacts, fetchContacts, deleteContacts };

// ------------ если использовать Асинксанк

// const addContacts = createAsyncThunk(
//   "contacts/addContacts",
//   async (contact) => {
//     const { data } = await axios.post("/contacts", contact);
//     return data;
//   }
// );
// const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
//   const { data } = await axios.get("/contacts");
//   return data;
// });
