import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form-container">
        <Input
          typeInput="text"
          inputDataId="name"
          cardValue={ cardName }
          onInputChange={ onInputChange }
        />
        <Input
          typeInput="textarea"
          inputDataId="description"
          cardValue={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Input
          typeInput="number"
          inputDataId="attr1"
          cardValue={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Input
          typeInput="number"
          inputDataId="attr2"
          cardValue={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Input
          typeInput="number"
          inputDataId="attr3"
          cardValue={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Input
          typeInput="text"
          inputDataId="image"
          cardValue={ cardImage }
          onInputChange={ onInputChange }
        />
        <Input
          typeInput="select"
          inputDataId="rare"
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        <Input
          typeInput="checkbox"
          inputDataId="trunfo"
          cardValue={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <Button
          inputDataId="save-button"
          onSaveButtonClick={ onSaveButtonClick }
          buttonDisable={ isSaveButtonDisabled }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
