import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <React.Fragment>
    <p>{`👳${user.name}`}</p>
    <p>{`🏠 ${user.address.city}`}</p>
    <a href={user.email}>{`📧 ${user.email}`}</a>
  </React.Fragment>
);

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default User;
