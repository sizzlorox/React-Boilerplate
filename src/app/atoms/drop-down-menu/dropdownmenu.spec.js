const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const DropDownMenu = require('./DropDownMenu');

describe('Atom <DropDownMenu />', function () {

  beforeEach(() => {
    this.mockChildren = 'Unit Test Children';

    this.wrapper = shallow((<DropDownMenu >{this.mockChildren}</DropDownMenu>));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(DropDownMenu.prototype, 'componentWillMount');

    const wrapper = shallow((<DropDownMenu />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(DropDownMenu.prototype, 'componentDidMount');

    const wrapper = shallow((<DropDownMenu />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('ul');
    expect(this.wrapper.find('ul').exists()).to.eql(true);
  });

  it('Correct roles', () => {
    expect(this.wrapper.find('ul').get(0).props.role).to.eql('menubar');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('ul').get(0).props.children).to.eql(this.mockChildren);
    expect(this.wrapper.find('ul').get(0).props['data-dropdown-menu']).to.eql(true);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});