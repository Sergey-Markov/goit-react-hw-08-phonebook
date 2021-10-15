import s from "../Contacts/Contacts.module.css";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { phonebookOperations, phonebookSelectors } from "../../redux";
function Contacts({ contacts, isLoading, onClick }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={s.list}>
        {contacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <li key={id} className={s.item}>
              {name}: {number}
              <button
                type="button"
                onClick={() => {
                  onClick(id);
                }}
                className={s.button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      {isLoading && <h3>Loading...</h3>}
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: phonebookSelectors.getIsLOading(state),
    contacts: phonebookSelectors.getFilteredContacts(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
  onClick: (id) => dispatch(phonebookOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

// const mapStateToProps = (state) => {
//   const { filter, contacts } = state.phonebook;
//   const filteredContacts = () => {
//     const normalizeFilter = filter.toLowerCase().trim();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   };
//   const filteredContact = filteredContacts();

//   return {
//     contacts: filteredContact,
//   };
// };
