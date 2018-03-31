const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Title = require('./Title');

describe('Atom <Title />', function () {

  beforeEach(() => {
    this.mockChildren = 'Unit Test'

    this.wrapper = shallow((<Title>{this.mockChildren}</Title>));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Title.prototype, 'componentWillMount');

    const wrapper = shallow((<Title />));
    expect(Title.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Title.prototype, 'componentDidMount');

    const wrapper = shallow((<Title />));
    expect(Title.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('li').get(0).props.children).to.eql(this.mockChildren);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});