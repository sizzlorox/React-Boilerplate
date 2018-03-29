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
    this.mockHandleClick = () => {};

    this.wrapper = shallow((<Accordion title={this.mockTitle}>{this.mockChildren}</Accordion>));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(Accordion.prototype, 'componentWillMount');

    const wrapper = shallow((<Accordion />));
    expect(Accordion.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(Accordion.prototype, 'componentDidMount');

    const wrapper = shallow((<Accordion />));
    expect(Accordion.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
    expect(this.wrapper.find('li')).to.have.length(1);
    expect(this.wrapper.find('Title')).to.have.length(1);
    expect(this.wrapper.find('Content')).to.have.length(1);
    expect(this.wrapper.find('Title').get(0).type).to.eql(Title);
    expect(this.wrapper.find('Content').get(0).type).to.eql(Content);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('Title').get(0).props.children).to.eql(this.mockTitle);
    expect(this.wrapper.find('Content').get(0).props.children).to.eql(this.mockChildren);
    expect(this.wrapper.find('Content').get(0).props.active).to.eql(false);

    // Foundation CSS
    expect(this.wrapper.get(0).props['data-accordion-item']).to.eql(true);
  });

  it('Initialized with state active', () => {
    expect(this.wrapper.state().active).to.eql(false);
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ active: true });
    expect(this.wrapper.state().active).to.eql(true);
  });

});