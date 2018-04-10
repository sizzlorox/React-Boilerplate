const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const AboutInfo = require('../../molecules/about/AboutInfo');

// Organisms
const Section = require('./Section');

describe('Organism <Section />', function () {

  beforeEach(() => {
    this.mockMessages = ['Unit', 'Test'];
    this.wrapper = shallow((<Section />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Section.prototype, 'componentWillMount');

    const wrapper = shallow((<Section />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Section.prototype, 'componentDidMount');

    const wrapper = shallow((<Section />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('section');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('h1');
    expect(this.wrapper.get(0).props.children[1].type).to.eql(AboutInfo);

    expect(this.wrapper.find('section')).to.have.length(1);
    expect(this.wrapper.find('h1')).to.have.length(1);
    expect(this.wrapper.find(AboutInfo)).to.have.length(1);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});