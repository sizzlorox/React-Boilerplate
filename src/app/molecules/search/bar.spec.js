const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const Bar = require('./Bar');

describe('Molecule <Bar />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Bar />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Bar.prototype, 'componentWillMount');

    const wrapper = shallow((<Bar url={this.mockUrl}/>));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Bar.prototype, 'componentDidMount');

    const wrapper = shallow((<Bar url={this.mockUrl}/>));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('ul');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('li');
    expect(this.wrapper.get(0).props.children[1].type).to.eql('li');
    expect(this.wrapper.get(0).props.children[0].props.children.type).to.eql('input');
    expect(this.wrapper.get(0).props.children[1].props.children.type).to.eql('button');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('input').get(0).props.type).to.eql('search');
    expect(this.wrapper.find('button').get(0).props.type).to.eql('button');
    expect(this.wrapper.find('button').get(0).props.children).to.eql('Search');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});