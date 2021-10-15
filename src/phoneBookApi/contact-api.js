import axios from "axios";

axios.defaults.baseURL = "http://localhost:7777";

const fetchContacts = () => {
  return axios.get("/contacts").then((response) => response.data);
};

const addContacts = (contact) => {
  return axios.post("/contacts", contact).then(({ data }) => data);
};

const deleteContact = (contactID) => {
  return axios.delete(`/contacts/${contactID}`);
};

const updateContact = (contactID, update) => {
  return axios.patch(`/contacts/${contactID}`, update).then(({ data }) => data);
};

export default { fetchContacts, addContacts, deleteContact, updateContact };
