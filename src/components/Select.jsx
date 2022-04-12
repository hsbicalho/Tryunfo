import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const {
      inputDataId,
      cardRare,
      onInputChange,
      name,
    } = this.props;
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
}

Select.propTypes = {
  typeInput: PropTypes.string,
  inputDataId: PropTypes.string,
  cardValue: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  cardRare: PropTypes.bool,
}.isRequired;
