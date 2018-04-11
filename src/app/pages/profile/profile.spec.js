const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Pages
const Profile = require('./Profile');

describe('Page <Profile />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Profile />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Profile.prototype, 'componentWillMount');

    const wrapper = shallow((<Profile />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Profile.prototype, 'componentDidMount');

    const wrapper = shallow((<Profile />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('section');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[0].props.children.type).to.eql('div');
    expect(this.wrapper.get(0).props.children[0].props.children.props.children[0].type).to.eql('img');
    expect(this.wrapper.get(0).props.children[0].props.children.props.children[1].type).to.eql('span');
    expect(this.wrapper.get(0).props.children[1].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[0].type).to.eql('span');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[1].type).to.eql('span');

    expect(this.wrapper.find('section')).to.have.length(1);
    expect(this.wrapper.find('div')).to.have.length(4);
    expect(this.wrapper.find('img')).to.have.length(1);
    expect(this.wrapper.find('span')).to.have.length(3);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('section').get(0).props.id).to.eql('profile');
    expect(this.wrapper.find('img').get(0).props.src).to.eql('http://via.placeholder.com/64x64');
    expect(this.wrapper.find('span').get(0).props.children).to.eql('UserName');
    expect(this.wrapper.find('span').get(1).props.children).to.eql('TEST');
    expect(this.wrapper.find('span').get(2).props.children).to.eql('TEST2');

  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});