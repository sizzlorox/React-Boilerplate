const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const { Link } = require('react-router-dom');
const sinon = require('sinon');

// Atoms
const DropDownItem = require('./DropDownItem');

describe('Atom <DropDownItem />', function () {

  beforeEach(() => {
    this.mockOnClick = 'Unit Test OnClick';
    this.mockUrl = 'Unit Test Url';
    this.mockChildren = 'Unit Test Children';

    this.wrapper = shallow((<DropDownItem onClick={this.mockOnClick} url={this.mockUrl}>{this.mockChildren}</DropDownItem>));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(DropDownItem.prototype, 'componentWillMount');

    const wrapper = shallow((<DropDownItem url={this.mockUrl}/>));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(DropDownItem.prototype, 'componentDidMount');

    const wrapper = shallow((<DropDownItem url={this.mockUrl}/>));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('li');
    expect(this.wrapper.get(0).props.children.type).to.eql(Link);
    expect(this.wrapper.find('li').exists()).to.eql(true);
    expect(this.wrapper.find('Link').exists()).to.eql(true);
  });

  it('Correct roles', () => {
    expect(this.wrapper.find('li').get(0).props.role).to.eql('menuitem');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('li').get(0).props.onClick).to.eql(this.mockOnClick);
    expect(this.wrapper.find('Link').get(0).props.children).to.eql(this.mockChildren);
    expect(this.wrapper.find('Link').get(0).props.to).to.eql(this.mockUrl);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});