import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { inputDataId } = this.props;
    return (
      <button type="button" data-testid={ `${inputDataId}-input` }>Enviar</button>
    );
  }
}

Button.propTypes = {
  inputDataId: PropTypes.string,
}.isRequired;
