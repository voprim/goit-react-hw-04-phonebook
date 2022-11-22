import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import {Container} from './Container/Container';
import {ContactForm} from './ContactForm/ContactForm';
import {Filter} from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';

export function App() {
  const [contacts, setContacts] = useState(
    [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
    } else {
      setContacts([contact, ...contacts]);
      };  
  };
  
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

      return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </Container>
    );
}