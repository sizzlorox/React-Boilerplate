const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Organisms
const Section = require('../../organisms/about/Section');

// Pages
const About = require('./About');

describe('Page <About />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<About />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(About.prototype, 'componentWillMount');

    const wrapper = shallow((<About />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(About.prototype, 'componentDidMount');

    const wrapper = shallow((<About />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children.type).to.eql(Section);

    expect(this.wrapper.find('div')).to.have.length(1);
    expect(this.wrapper.find(Section)).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('div').get(0).props.id).to.eql('about');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});