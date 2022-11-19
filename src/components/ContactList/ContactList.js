import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.info}>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
