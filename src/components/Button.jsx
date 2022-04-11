import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { inputDataId,
      buttonDisable,
      onSaveButtonClick,
    } = this.props;
    return (
      <button
        type="button"
        data-testid={ inputDataId }
        disabled={ buttonDisable }
        onClick={ onSaveButtonClick }
      >
        Enviar
      </button>
    );
  }
}

Button.propTypes = {
  inputDataId: PropTypes.string,
  buttonDisable: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
