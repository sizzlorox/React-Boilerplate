const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Components
const DropDownSubject = require('./DropDownSubject');

describe('Atom <DropDownSubject />', function () {

  beforeEach(() => {
    this.mockChildren = 'Unit Test Children';
    this.mockMenuName = 'Unit Test MenuName';

    this.wrapper = shallow((<DropDownSubject menuName={this.mockMenuName}>{this.mockChildren}</DropDownSubject>));
  });

  it('Calls componentWillMount', () => {
    sinon.spy(DropDownSubject.prototype, 'componentWillMount');

    const wrapper = shallow((<DropDownSubject />));
    expect(DropDownSubject.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    sinon.spy(DropDownSubject.prototype, 'componentDidMount');

    const wrapper = shallow((<DropDownSubject />));
    expect(DropDownSubject.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('a');
    expect(this.wrapper.get(0).props.children[1].type).to.eql('ul');
    expect(this.wrapper.find('li').exists()).to.eql(true);
    expect(this.wrapper.find('a').exists()).to.eql(true);
    expect(this.wrapper.find('ul').exists()).to.eql(true);
  });

  it('Correct roles', () => {
    expect(this.wrapper.find('li').get(0).props.role).to.eql('menuitem');
    expect(this.wrapper.find('ul').get(0).props.role).to.eql('menu');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('ul').get(0).props.children).to.eql(this.mockChildren);
    expect(this.wrapper.find('a').get(0).props.children).to.eql(this.mockMenuName);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});