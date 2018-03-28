const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Link } = require('react-router-dom');

// Components
const NavTo = require('./NavTo');

describe('Navigation Atom <NavTo />', function () {

  beforeEach(() => {
    this.mockChildrenText = 'Unit Test';
    this.mockUrl = 'unitTestUrl';

    this.wrapper = shallow((<NavTo url={this.mockUrl}>{this.mockChildrenText}</NavTo>));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(NavTo.prototype, 'componentWillMount');

    const wrapper = shallow((<NavTo url={this.mockUrl} />));
    expect(NavTo.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(NavTo.prototype, 'componentDidMount');

    const wrapper = shallow((<NavTo url={this.mockUrl} />));
    expect(NavTo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
    expect(this.wrapper.find('li')).to.have.length(1);
    expect(this.wrapper.get(0).props.children.type).to.eql(Link);
  });

  it('Correct props', () => {
    expect(this.wrapper.get(0).props.children.props.children).to.eql(this.mockChildrenText);
    expect(this.wrapper.get(0).props.children.props.to).to.eql(this.mockUrl);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});