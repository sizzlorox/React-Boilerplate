const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Button = require('./Button');

describe('Atom <Button />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Button />));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Button.prototype, 'componentWillMount');

    const wrapper = shallow((<Button />));
    expect(Button.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Button.prototype, 'componentDidMount');

    const wrapper = shallow((<Button />));
    expect(Button.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
    expect(this.wrapper.get(0).props.children.type).to.eql('button');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('button').get(0).props.children).to.eql('Search');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});