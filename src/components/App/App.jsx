import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import initialContacts from '../contacts.json';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: initialContacts,
    // contacts: [],
    filter: '',
  };

  addContact = (contact, name) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    } else {
      const newContact = { ...contact, id: nanoid() };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  // addContact = newName => {
  //   if (this.state.contacts.find(contact => contact.name === newName.name)) {
  //     alert(`${newName.name} is already in contacts.`);
  //     return;
  //   }
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newName],
  //   }));
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContact = evt => {
    this.setState({
      filter: evt.currentTarget.value.toLocaleLowerCase().trim(),
    });
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const {
      addContact,
      findContact,
      deleteContact,
      state: { filter, contacts },
    } = this;

    const contactsToShow = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );

    return (
      <Layout>
        <ContactForm onAdd={addContact} />
        <Filter value={filter} onChange={findContact} />
        <ContactsList contacts={contactsToShow} onDelete={deleteContact} />
        <GlobalStyle />
      </Layout>
    );
  }
}
