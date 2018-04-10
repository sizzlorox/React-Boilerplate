const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Organisms
const Questions = require('../../organisms/faq/Questions');

// Pages
const Faq = require('./Faq');

describe('Page <Faq />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Faq />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Faq.prototype, 'componentWillMount');

    const wrapper = shallow((<Faq />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Faq.prototype, 'componentDidMount');

    const wrapper = shallow((<Faq />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('section');
    expect(this.wrapper.get(0).props.children.type).to.eql('div');
    expect(this.wrapper.get(0).props.children.props.children[0].type).to.eql('h1');
    expect(this.wrapper.get(0).props.children.props.children[1].type).to.eql('div');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children.type).to.eql(Questions);

    expect(this.wrapper.find('section')).to.have.length(1);
    expect(this.wrapper.find('div')).to.have.length(2);
    expect(this.wrapper.find('h1')).to.have.length(1);
    expect(this.wrapper.find(Questions)).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('section').get(0).props.id).to.eql('faq');
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