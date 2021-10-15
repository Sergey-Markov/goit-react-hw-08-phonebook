import { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import PropTypes from "prop-types";
import operations from "../../redux/phonebook-operations";
import s from "../Form/Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameId = shortid.generate();
  numberId = shortid.generate();

  resetFormInput() {
    this.setState({ name: "", number: "" });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.contacts);

    if (
      this.props.contacts.find((contact) => contact.name === this.state.name)
    ) {
      alert(`${this.state.name} is already created!`);
      this.resetFormInput();

      return;
    }

    this.props.onSubmit(this.state);
    this.resetFormInput();
  };
  hadleAddValue = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor={this.nameId} className={s.label}>
          Name
        </label>
        <input
          id={this.nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name}
          onChange={this.hadleAddValue}
          className={s.input}
        />
        <label htmlFor={this.numberId} className={s.label}>
          Number
        </label>
        <input
          id={this.numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.number}
          onChange={this.hadleAddValue}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newContact) => dispatch(operations.addContacts(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
