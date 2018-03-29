const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Logo = require('../../atoms/header/Logo');
const Title = require('../../atoms/header/Title');

// Molecules
const Header = require('./Header');
const Navigation = require('../../molecules/header/navigation/Navigation');
const Bar = require('../../molecules/header/search/Bar');

describe('Organism <Header />', function () {

  beforeEach(() => {
    this.mockUrl = 'https://placehold.it/64x32';

    this.wrapper = shallow((<Header />));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Header.prototype, 'componentWillMount');

    const wrapper = shallow((<Header />));
    expect(Header.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Header.prototype, 'componentDidMount');

    const wrapper = shallow((<Header />));
    expect(Header.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.find('Logo')).to.have.length(1);
    expect(this.wrapper.find('Logo').get(0).type).to.eql(Logo);
    expect(this.wrapper.find('Title')).to.have.length(1);
    expect(this.wrapper.find('Title').get(0).type).to.eql(Title);
    expect(this.wrapper.find('Navigation')).to.have.length(1);
    expect(this.wrapper.find('Navigation').get(0).type).to.eql(Navigation);
    expect(this.wrapper.find('Bar')).to.have.length(1);
    expect(this.wrapper.find('Bar').get(0).type).to.eql(Bar);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('Logo').get(0).props.imageUrl).to.eql(this.mockUrl);
    expect(this.wrapper.find('Title').get(0).props.children).to.eql('Boilerplate');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state().isLoading).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});