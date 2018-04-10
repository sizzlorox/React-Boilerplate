const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Pages
const Home = require('./Home');

describe('Page <Home />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Home />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Home.prototype, 'componentWillMount');

    const wrapper = shallow((<Home />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Home.prototype, 'componentDidMount');

    const wrapper = shallow((<Home />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children.type).to.eql('table');
    expect(this.wrapper.get(0).props.children.props.children[0].type).to.eql('thead');
    expect(this.wrapper.get(0).props.children.props.children[1].type).to.eql('tbody');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children.type).to.eql(Questions);

    expect(this.wrapper.find('div')).to.have.length(1);
    expect(this.wrapper.find('table')).to.have.length(1);
    expect(this.wrapper.find('thead')).to.have.length(1);
    expect(this.wrapper.find('tbody')).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('section').get(0).props.id).to.eql('Home');
    expect(this.wrapper.find('h1').get(0).props.children).to.eql('Frequently Asked Questions');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});