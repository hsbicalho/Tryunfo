import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

export default class Form extends Component {
  render() {
    return (
      <form className="form-container">
        <Input typeInput="text" inputDataId="name" />
        <Input typeInput="textarea" inputDataId="description" />
        <Input typeInput="number" inputDataId="attr1" />
        <Input typeInput="number" inputDataId="attr2" />
        <Input typeInput="number" inputDataId="attr3" />
        <Input typeInput="text" inputDataId="name" />
        <Input typeInput="select" inputDataId="name" />
        <Input typeInput="checkbox" inputDataId="trunfo" />
        <Button inputDataId="save" />
      </form>
    );
  }
}
