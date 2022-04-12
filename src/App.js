import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validadeForm = this.validadeForm.bind(this);
    this.saveOnClick = this.saveOnClick.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validadeForm);
  };

  validadeForm = () => {
    const MAX_VALUE = 210;
    const MAX_VALUE_ATTR = 90;
    const REMOVE_ELEMENTS = 1;
    const stateForm = this.state;
    const filledForm = Object.keys(stateForm).slice(0, -REMOVE_ELEMENTS)
      .every((key) => stateForm[key].length !== 0);

    const cardAttrSum = (Number(stateForm.cardAttr1)
    + Number(stateForm.cardAttr2)
    + Number(stateForm.cardAttr3)) <= MAX_VALUE;

    const cardAttrValue = Number(stateForm.cardAttr1) >= 0
      && Number(stateForm.cardAttr1) <= MAX_VALUE_ATTR
      && Number(stateForm.cardAttr2) >= 0
      && Number(stateForm.cardAttr2) <= MAX_VALUE_ATTR
      && Number(stateForm.cardAttr3) >= 0
      && Number(stateForm.cardAttr3) <= MAX_VALUE_ATTR;

    if (filledForm && cardAttrValue && cardAttrSum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  saveOnClick = () => {
    const stateForm = this.state;
    const REMOVE_ELEMENTS = 2;
    const arrayCard = Object.keys(stateForm).slice(0, -REMOVE_ELEMENTS)
      .reduce((map, key) => {
        map[key] = stateForm[key];
        return map;
      }, {
        cardName: '',
        cardDescription: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
      });

    stateForm.savedCards.push(arrayCard);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.saveOnClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
