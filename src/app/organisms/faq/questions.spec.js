const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const AccordionMolecule = require('../../molecules/accordion/Accordion');

// Oganisms
const Questions = require('./Questions');

describe('Organism <Questions />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Questions />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Questions.prototype, 'componentWillMount');

    const wrapper = shallow((<Questions messages={this.mockMessages} />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Questions.prototype, 'componentDidMount');

    const wrapper = shallow((<Questions messages={this.mockMessages} />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('ul');
    expect(this.wrapper.find('Accordion')).to.have.length(3);
    expect(this.wrapper.find('Accordion').get(0).type).to.eql(AccordionMolecule);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('Accordion').get(0).props.title).to.eql('What is the point of this boilerplate?');
    expect(this.wrapper.find('Accordion').get(0).props.children).to.eql('This boilerplate is to learn on how to use React while reaching out to others to contribute their knowledge on efficiently and cleanly utilizing ReactJS');
    expect(this.wrapper.find('Accordion').get(1).props.title).to.eql('Why are you doing this?');
    expect(this.wrapper.find('Accordion').get(1).props.children).to.eql('To learn and also to help others.');
    expect(this.wrapper.find('Accordion').get(2).props.title).to.eql('Is there anything I can do to help?');
    expect(this.wrapper.find('Accordion').get(2).props.children).to.eql('Contribute what you know about React!');

    // Foundation CSS
    expect(this.wrapper.get(0).props['data-accordion']).exist.to.eql(true);
    expect(this.wrapper.get(0).props['data-multi-expand']).to.eql('true');
    expect(this.wrapper.get(0).props['data-allow-all-closed']).to.eql('true');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});