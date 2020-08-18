
import React from 'react';

/**
 * Displays error messages for invalid inputs
 */

const Alert = ({ type, messages }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {messages.map((error) => (
        <p className="mb-0 small" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
};

Alert.defaultProps = {
  type: 'danger',
  messages: [],
};

export default Alert;
