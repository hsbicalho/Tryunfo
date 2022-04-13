import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import './Form.css';

export default class Form extends Component {
/*  constructor(props) {
    super(props);

    this.state = {};
  }
 */
  render() {
    const {
      cardName,
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
          name="cardName"
        />
        <Input
          typeInput="textarea"
          inputDataId="description"
          cardValue={ cardDescription }
          onInputChange={ onInputChange }
          name="cardDescription"
        />
        <Input
          typeInput="number"
          inputDataId="attr1"
          cardValue={ cardAttr1 }
          onInputChange={ onInputChange }
          name="cardAttr1"
        />
        <Input
          typeInput="number"
          inputDataId="attr2"
          cardValue={ cardAttr2 }
          onInputChange={ onInputChange }
          name="cardAttr2"
        />
        <Input
          typeInput="number"
          inputDataId="attr3"
          cardValue={ cardAttr3 }
          onInputChange={ onInputChange }
          name="cardAttr3"
        />
        <Input
          typeInput="text"
          inputDataId="image"
          cardValue={ cardImage }
          onInputChange={ onInputChange }
          name="cardImage"
        />
        <Select
          inputDataId="rare"
          cardRare={ cardRare }
          onInputChange={ onInputChange }
          name="cardRare"
        />

        { hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <Input
              typeInput="checkbox"
              inputDataId="trunfo"
              cardValue={ cardTrunfo }
              onInputChange={ onInputChange }
              name="cardTrunfo"
            />
          )}
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
