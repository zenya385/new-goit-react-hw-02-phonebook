import PropTypes from "prop-types";

const ContactList = ({ filterInputHandler, removeUser }) => {
  return (
    <>
      <ul>
        {filterInputHandler.map((user) => (
          <li key={user.id}>
            <span>{user.name}: </span>
            {user.number}
            <button type="button" onClick={() => removeUser(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filterInputHandler: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  removeUser: PropTypes.func.isRequired,
};

export default ContactList;
