const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Link } = require('react-router-dom');

// Components
const Logo = require('./Logo');

describe('Header Atom <Logo />', function () {

  beforeEach(() => {
    this.mockSrc = 'unitSrcUrl';

    this.wrapper = shallow((<Logo imageUrl={this.mockSrc}></Logo>));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Logo.prototype, 'componentWillMount');

    const wrapper = shallow((<Logo />));
    expect(Logo.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Logo.prototype, 'componentDidMount');

    const wrapper = shallow((<Logo />));
    expect(Logo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql(Link);
    expect(this.wrapper.find(Link)).to.have.length(1);
    expect(this.wrapper.find('img')).to.have.length(1);
    expect(this.wrapper.get(0).props.children.type).to.eql('img');
  });

  it('Correct props', () => {
    expect(this.wrapper.get(0).props.children.props.src).to.eql(this.mockSrc);
    expect(this.wrapper.get(0).props.to).to.eql('/');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});