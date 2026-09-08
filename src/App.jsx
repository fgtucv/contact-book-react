import { Component } from 'react'
import { nanoid } from 'nanoid';
import { initialContacts } from './data/contacts';
import { ContsctList } from './components/ContactList/ContactList.jsx';
import { AddContact } from "./components/AddContact/AddContact.jsx"

export class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: initialContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deletContact = (id) => {
    const newContacts = this.state.contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    })
  }

  addContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const contactInfo = Object.fromEntries(formData.entries());
    
    const newContact = {
      id: nanoid(),
      ...contactInfo
    }

    this.setState({
      contacts: [...this.state.contacts, newContact]
    })

    form.reset();
  }

  render() {
    return (
      <>
        <AddContact addContact={this.addContact}/>
        <ContsctList deletContact={this.deletContact} contacts={this.state.contacts} />
      </>
    )
  }
}