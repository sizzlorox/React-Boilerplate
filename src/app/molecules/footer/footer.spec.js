const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Route, Switch, BrowserRouter } = require('react-router-dom');

// Components
const Footer = require('./Footer');

describe('<Display />', function () {

  beforeEach(() => {
    this.footerWrapper = mount(<Footer />);
  });

  it('Contains footer text', () => {
    expect(this.footerWrapper.text()).to.eql('Copyright and footer links here.');
  });

  it('Correct type', () => {
    expect(this.footerWrapper.find('footer').get(0).type).to.eql('footer');
  });

  it('Initialized with state foo', () => {
    expect(this.footerWrapper.state().foo).to.eql('bar');
  });

  it('Allows us to set state', () => {
    this.footerWrapper.setState({ bar: 'foo' });
    expect(this.footerWrapper.state().bar).to.eql('foo');
  });

});