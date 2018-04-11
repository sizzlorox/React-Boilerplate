const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Title = require('../../atoms/accordion/Title');
const Content = require('../../atoms/accordion/Content');

// Molecules
const Accordion = require('./Accordion');

describe('Molecule <Accordion />', function () {

  beforeEach(() => {
    this.mockTitle = 'Unit Test';
    this.mockChildren = 'Unit Test Children';

    this.wrapper = shallow((<Accordion title={this.mockTitle}>{this.mockChildren}</Accordion>));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Accordion.prototype, 'componentWillMount');

    const wrapper = shallow((<Accordion />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Accordion.prototype, 'componentDidMount');

    const wrapper = shallow((<Accordion />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
    expect(this.wrapper.find('Title').get(0).type).to.eql(Title);
    expect(this.wrapper.find('Content').get(0).type).to.eql(Content);
  
    expect(this.wrapper.find('li')).to.have.length(1);
    expect(this.wrapper.find('Title')).to.have.length(1);
    expect(this.wrapper.find('Content')).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('Title').get(0).props.children).to.eql(this.mockTitle);
    expect(this.wrapper.find('Content').get(0).props.children).to.eql(this.mockChildren);

    // Foundation CSS
    expect(this.wrapper.get(0).props['data-accordion-item']).to.eql(true);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});