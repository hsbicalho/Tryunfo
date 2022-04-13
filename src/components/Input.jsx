import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {
      typeInput,
      inputDataId,
      cardValue,
      onInputChange,
      name,
    } = this.props;
    return (
      <label htmlFor={ `${inputDataId}-input` }>
        {inputDataId}
        <input
          type={ typeInput }
          data-testid={ `${inputDataId}-input` }
          checked={ cardValue }
          value={ cardValue }
          onChange={ onInputChange }
          name={ name }
        />
      </label>
    );
  }
}

Input.propTypes = {
  typeInput: PropTypes.string,
  inputDataId: PropTypes.string,
  cardValue: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  cardRare: PropTypes.bool,
}.isRequired;
