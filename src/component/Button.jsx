import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Button(props) {
  return (
    <button className="button" type="button" onClick={props.onClick}>Добавить тест</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;

