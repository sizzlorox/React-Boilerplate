const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Route, Switch, BrowserRouter } = require('react-router-dom');

// Atoms
const Text = require('../../atoms/footer/Text');

// Components
const Footer = require('./Footer');

describe('<Footer />', function () {

  beforeEach(() => {
    this.mockChildrenText = 'Unit Test';
    this.mockUrl = 'unitTestUrl';

    this.wrapper = shallow(<Footer />);
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Footer.prototype, 'componentWillMount');

    const wrapper = shallow((<Footer url={this.mockUrl} />));
    expect(Footer.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Footer.prototype, 'componentDidMount');

    const wrapper = shallow((<Footer url={this.mockUrl} />));
    expect(Footer.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Contains footer text', () => {
    expect(this.wrapper.find('Text').get(0).props.children).to.eql('Copyright here.');
  });

  it('Initialized with state foo', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.find('Text').get(0).type).to.eql(Text);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('Text').hasClass('four columns offset-by-six')).to.eql(true);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});