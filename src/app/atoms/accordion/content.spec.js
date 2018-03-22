const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Route, Switch, BrowserRouter } = require('react-router-dom');

// Components
const Content = require('./Content');

describe('Accordion Atom <Content />', function () {

  beforeEach(() => {
    this.mockChildrenText = 'Unit Test';

    this.wrapper = shallow((<Content>{this.mockChildrenText}</Content>));
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Content.prototype, 'componentDidMount');

    const mountWrapper = mount((<Content />));
    expect(mountWrapper.instance().componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.find('div')).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.get(0).props.children).to.eql(this.mockChildrenText);
    expect(this.wrapper.get(0).props.style).to.eql({ display: 'none' });

    // Foundation SCSS
    expect(this.wrapper.get(0).props['data-tab-content']).to.eql(true);
  });

  it('Initialized with state foo', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});