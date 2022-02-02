import React, { Component } from "react";
// import Section from "./";

// import { nanoid } from "nanoid";
// model.id = nanoid();

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmi = (e) => {
    e.preventDefault();
  };
  //   handleInputChange = (e) => {
  //     this.setState({ name: e.currentTarget.name });
  //   };
  //   handleNumberChange = (e) => {
  //     this.setState({ number: e.currentTarget.value });
  //   };
  render() {
    return (
      <form onSubmit={this.handleSubmi} type="Phonebook">
        <label>
          Name{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number{" "}
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default App;
