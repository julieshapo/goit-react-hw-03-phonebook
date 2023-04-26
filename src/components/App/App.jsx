import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import initialContacts from '../contacts.json';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = newName => {
    if (this.state.contacts.find(contact => contact.name === newName.name)) {
      alert(`${newName.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
    }));
  };

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

  render() {
    const {
      addContact,
      findContact,
      deleteContact,
      state: { filter, contacts },
    } = this;

    // const filterToLowerCase = filter.toLocaleLowerCase();
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
