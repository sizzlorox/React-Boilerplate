const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Title = require('./Title');

describe('Accordion Atom <Title />', function () {

  beforeEach(() => {
    this.mockChildrenText = 'Unit Test';
    this.mockClassName = 'unitTestClassName';

    this.wrapper = shallow((<Title className={this.mockClassName}>{this.mockChildrenText}</Title>));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Title.prototype, 'componentWillMount');

    const wrapper = shallow((<Title />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Title.prototype, 'componentDidMount');

    const wrapper = shallow((<Title />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('a');
    expect(this.wrapper.find('a')).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.get(0).props.children).to.eql(this.mockChildrenText);
    expect(this.wrapper.get(0).props.className).to.eql(this.mockClassName);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});