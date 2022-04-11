import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { typeInput, inputDataId } = this.props;
    if (typeInput === 'select') {
      return (
        <label htmlFor={ `${inputDataId}-input` }>
          {inputDataId}
          <select data-testid={ `${inputDataId}-input` }>
            <option>normal</option>
            <option>rare</option>
            <option>super-rare</option>
          </select>
        </label>
      );
    }
    return (
      <label htmlFor={ `${inputDataId}-input` }>
        {inputDataId}
        <input type={ typeInput } data-testid={ `${inputDataId}-input` } />
      </label>
    );
  }
}

Input.propTypes = {
  typeInput: PropTypes.string,
  inputDataId: PropTypes.string,
}.isRequired;
