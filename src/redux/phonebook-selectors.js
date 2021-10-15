import { createSelector } from "reselect";

const getIsLOading = (state) => state.phonebook.loading;
const getPhonebookContacts = (state) => state.phonebook.contacts;
const getPhonebookFilter = (state) => state.phonebook.filter;

// Мемоизация функции
const getFilteredContacts = createSelector(
  [getPhonebookFilter, getPhonebookContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase().trim();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  }
);
// eslint-disable-next-line
export default {
  getIsLOading,
  getPhonebookFilter,
  getFilteredContacts,
};

//------------------ фильтр до мемоизации
// const getFilteredContacts = (state) => {
//   const filter = getPhonebookFilter(state);
//   const contacts = getPhonebookContacts(state);
//   const normalizeFilter = filter.toLowerCase().trim();
//   return contacts.filter((contact) => {
//     return contact.name.toLowerCase().includes(normalizeFilter);
//   });
// };
