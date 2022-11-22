import { useState } from 'react';
//import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Orest Orestovich"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          placeholder="123-45-67"
        />
      </label>
      <button className={css.btn} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}

//ContactForm.propTypes = {
//  addContact: PropTypes.func.isRequired,
//};
