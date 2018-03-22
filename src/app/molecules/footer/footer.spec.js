const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Route, Switch, BrowserRouter } = require('react-router-dom');

// Components
const Footer = require('./Footer');

describe('<Footer />', function () {

  beforeEach(() => {
    this.footerWrapper = mount(<Footer />);
  });

  it('Contains footer text', () => {
    expect(this.footerWrapper.find('Text').text()).to.eql('Copyright here.');
  });

  it('Initialized with state foo', () => {
    expect(this.footerWrapper.state().isLoading).to.eql(true);
  });

  it('Allows us to set state', () => {
    this.footerWrapper.setState({ isLoading: false });
    expect(this.footerWrapper.state().isLoading).to.eql(false);
  });

});