const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const UserList = require('./UserList');

describe('Molecule <UserList />', function () {

  beforeEach(() => {
    this.mockUsers = ['Unit', 'Test'];
    this.wrapper = shallow((<UserList users={this.mockUsers} />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(UserList.prototype, 'componentWillMount');

    const wrapper = shallow((<UserList users={this.mockUsers} />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(UserList.prototype, 'componentDidMount');

    const wrapper = shallow((<UserList users={this.mockUsers} />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children.type).to.eql('table');
    expect(this.wrapper.get(0).props.children.props.children.type).to.eql('tbody');
    expect(this.wrapper.get(0).props.children.props.children.props.children[0].type).to.eql('tr');
    expect(this.wrapper.get(0).props.children.props.children.props.children[0].props.children.type).to.eql('td');
    expect(this.wrapper.get(0).props.children.props.children.props.children[1].type).to.eql('tr');
    expect(this.wrapper.get(0).props.children.props.children.props.children[1].props.children.type).to.eql('td');

    expect(this.wrapper.find('div')).to.have.length(1);
    expect(this.wrapper.find('table')).to.have.length(1);
    expect(this.wrapper.find('tbody')).to.have.length(1);
    expect(this.wrapper.find('tr')).to.have.length(2);
    expect(this.wrapper.find('td')).to.have.length(2);
  });

  it('Correct props', () => {
    expect(this.wrapper.get(0).props.children.props.children.props.children[0].props.children.props.children).to.eql(this.mockUsers[0]);
    expect(this.wrapper.get(0).props.children.props.children.props.children[1].props.children.props.children).to.eql(this.mockUsers[1]);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});