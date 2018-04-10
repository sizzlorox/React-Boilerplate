const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Route, Switch, BrowserRouter } = require('react-router-dom');

// Molecules
const Footer = require('./Footer');

describe('Molecule <Footer />', function () {

  beforeEach(() => {
    this.wrapper = shallow(<Footer />);
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Footer.prototype, 'componentWillMount');

    const wrapper = shallow((<Footer users={this.mockUsers} />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Footer.prototype, 'componentDidMount');

    const wrapper = shallow((<Footer users={this.mockUsers} />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Contains footer text', () => {
    expect(this.wrapper.find('span').get(0).props.children).to.eql('Copyright here.');
  });

  it('Initialized with state foo', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children.type).to.eql('span');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});