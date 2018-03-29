const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Input = require('./Input');

describe('Atom <Input />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Input />));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Input.prototype, 'componentWillMount');

    const wrapper = shallow((<Input />));
    expect(Input.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Input.prototype, 'componentDidMount');

    const wrapper = shallow((<Input />));
    expect(Input.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
    expect(this.wrapper.get(0).props.children.type).to.eql('input');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('input').get(0).props.placeholder).to.eql('Search');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});