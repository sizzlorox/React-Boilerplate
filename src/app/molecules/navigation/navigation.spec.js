const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const NavTo = require('../../../atoms/header/navigation/NavTo');

// Molecules
const Navigation = require('./Navigation');

describe('Molecule <Navigation />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Navigation />));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Navigation.prototype, 'componentWillMount');

    const wrapper = shallow((<Navigation />));
    expect(Navigation.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Navigation.prototype, 'componentDidMount');

    const wrapper = shallow((<Navigation />));
    expect(Navigation.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('section');
    expect(this.wrapper.get(0).props.children.type).to.eql('ul');
    expect(this.wrapper.find('ul').get(0).props.children).to.have.length(3);
    expect(this.wrapper.find('ul').get(0).props.children[0].type).to.eql(NavTo);
    expect(this.wrapper.find('ul').get(0).props.children[1].type).to.eql(NavTo);
    expect(this.wrapper.find('ul').get(0).props.children[2].type).to.eql(NavTo);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('NavTo').get(0).props.url).to.eql('/');
    expect(this.wrapper.find('NavTo').get(0).props.children).to.eql('Home');
    expect(this.wrapper.find('NavTo').get(1).props.url).to.eql('/about');
    expect(this.wrapper.find('NavTo').get(1).props.children).to.eql('About');
    expect(this.wrapper.find('NavTo').get(2).props.url).to.eql('/faq');
    expect(this.wrapper.find('NavTo').get(2).props.children).to.eql('FAQ');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});