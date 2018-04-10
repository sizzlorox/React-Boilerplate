const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const Navigation = require('../../molecules/navigation/Navigation');
const AccountManagement = require('../../molecules/navigation/account-menu/AccountManagement');

// Organisms
const Header = require('./Header');

describe('Organism <Header />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Header />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Header.prototype, 'componentWillMount');

    const wrapper = shallow((<Header />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Header.prototype, 'componentDidMount');

    const wrapper = shallow((<Header />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[0].props.children.type).to.eql('ul');
    expect(this.wrapper.get(0).props.children[0].props.children.props.children[0].type).to.eql('li');
    expect(this.wrapper.get(0).props.children[0].props.children.props.children[1].type).to.eql(Navigation);
    expect(this.wrapper.get(0).props.children[1].type).to.eql(AccountManagement);

    expect(this.wrapper.find('div')).to.have.length(2);
    expect(this.wrapper.find('ul')).to.have.length(1);
    expect(this.wrapper.find('li')).to.have.length(1);
    expect(this.wrapper.find(Navigation)).to.have.length(1);
    expect(this.wrapper.find(AccountManagement)).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('div').get(0).props.id).to.eql('header');
    expect(this.wrapper.find('li').get(0).props.children).to.eql('BoilerPlate');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});