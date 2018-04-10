const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Organisms
const Chatroom = require('../../organisms/chat/Chatroom');

// Pages
const Chat = require('./Chat');

describe('Page <Chat />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Chat />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Chat.prototype, 'componentWillMount');

    const wrapper = shallow((<Chat />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Chat.prototype, 'componentDidMount');

    const wrapper = shallow((<Chat />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children.type).to.eql(Chatroom);

    expect(this.wrapper.find('div')).to.have.length(1);
    expect(this.wrapper.find(Chatroom)).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('div').get(0).props.id).to.eql('chat');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});