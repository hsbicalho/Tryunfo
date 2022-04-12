import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {
      typeInput,
      inputDataId,
      cardValue,
      cardRare,
      onInputChange,
      name,
    } = this.props;
    if (typeInput === 'select') {
      return (
        <label htmlFor={ `${inputDataId}-input` }>
          {inputDataId}
          <select
            data-testid={ `${inputDataId}-input` }
            value={ cardRare }
            onChange={ onInputChange }
            name={ name }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
      );
    }
    return (
      <label htmlFor={ `${inputDataId}-input` }>
        {inputDataId}
        <input
          type={ typeInput }
          data-testid={ `${inputDataId}-input` }
          value={ cardValue }
          checked={ cardValue }
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
