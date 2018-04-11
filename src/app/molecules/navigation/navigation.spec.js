const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { NavLink } = require('react-router-dom');

// Molecules
const Navigation = require('./Navigation');

describe('Molecule <Navigation />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Navigation />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Navigation.prototype, 'componentWillMount');

    const wrapper = shallow((<Navigation />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Navigation.prototype, 'componentDidMount');

    const wrapper = shallow((<Navigation />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('section');
    expect(this.wrapper.get(0).props.children.type).to.eql('ul');
    expect(this.wrapper.get(0).props.children.props.children[0].type).to.eql('li');
    expect(this.wrapper.get(0).props.children.props.children[0].props.children.type).to.eql(NavLink);
    expect(this.wrapper.get(0).props.children.props.children[1].type).to.eql('li');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children.type).to.eql(NavLink);
    expect(this.wrapper.get(0).props.children.props.children[2].type).to.eql('li');
    expect(this.wrapper.get(0).props.children.props.children[2].props.children.type).to.eql(NavLink);
  
    expect(this.wrapper.find('section')).to.have.length(1);
    expect(this.wrapper.find('ul')).to.have.length(1);
    expect(this.wrapper.find('li')).to.have.length(4);
    expect(this.wrapper.find(NavLink)).to.have.length(4);
  });

  it('Correct props', () => {
    expect(this.wrapper.find(NavLink).get(0).props.to).to.eql({
      pathname: '/',
      activeClassName: undefined,
      state: { fromNavigation: true }
    });
    expect(this.wrapper.find(NavLink).get(0).props.children).to.eql('Home');
    expect(this.wrapper.find(NavLink).get(1).props.to).to.eql({
      pathname: '/about',
      activeClassName: undefined,
      state: { fromNavigation: true }
    });
    expect(this.wrapper.find(NavLink).get(1).props.children).to.eql('About');
    expect(this.wrapper.find(NavLink).get(2).props.to).to.eql({
      pathname: '/faq',
      activeClassName: undefined,
      state: { fromNavigation: true }
    });
    expect(this.wrapper.find(NavLink).get(2).props.children).to.eql('FAQ');
    expect(this.wrapper.find(NavLink).get(3).props.to).to.eql({
      pathname: '/chatroom',
      activeClassName: undefined,
      state: { fromNavigation: true }
    });
    expect(this.wrapper.find(NavLink).get(3).props.children).to.eql('Chatroom');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});