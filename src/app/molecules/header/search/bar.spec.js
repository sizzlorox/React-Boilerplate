const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Input = require('../../../atoms/search/Input');
const Button = require('../../../atoms/search/Button');

// Molecules
const Bar = require('./Bar');

describe('Molecule <Bar />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Bar />));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Bar.prototype, 'componentWillMount');

    const wrapper = shallow((<Bar />));
    expect(Bar.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Bar.prototype, 'componentDidMount');

    const wrapper = shallow((<Bar />));
    expect(Bar.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('ul');
    expect(this.wrapper.get(0).props.children[0].type).to.eql(Input);
    expect(this.wrapper.get(0).props.children[1].type).to.eql(Button);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});