const validateForm = (stado) => {
  const MAX_VALUE = 210;
  const MAX_VALUE_ATTR = 90;
  const REMOVE_ELEMENTS = 1;
  const stateForm = stado;
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

export default validateForm;
