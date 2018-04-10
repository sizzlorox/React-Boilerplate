const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const MessageList = require('../../molecules/chat/MessageList');
const UserList = require('../../molecules/chat/UserList');
const MessageForm = require('../../molecules/chat/MessageForm');

// Organisms
const Chatroom = require('./Chatroom');

describe('Organism <Chatroom />', function () {

  beforeEach(() => {
    global.localStorage = {
       username: 'mockUserName',
       getItem: function () {
          return 'mockUserName'
       }
    };
    this.mockMessages = ['Unit', 'Test'];
    this.wrapper = shallow((<Chatroom />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Chatroom.prototype, 'componentWillMount');

    const wrapper = shallow((<Chatroom />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Chatroom.prototype, 'componentDidMount');

    const wrapper = shallow((<Chatroom />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Handles Submit', () => {
    const mockSubmitMessage = () => {};
    const mockSubmit = sinon.spy(Chatroom.prototype, 'handleMessageSubmit');
    const wrapper = mount((<Chatroom />));
    wrapper.find(MessageForm).simulate('submit', {
      preventDefault: () => { },
      message: 'test'
    });
    expect(mockSubmit.calledOnce).to.eql(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('section');
    expect(this.wrapper.get(0).props.children[0].props.children[0].type).to.eql(MessageList);
    expect(this.wrapper.get(0).props.children[0].props.children[1].type).to.eql(UserList);
    expect(this.wrapper.get(0).props.children[1].type).to.eql('section');
    expect(this.wrapper.get(0).props.children[1].props.children.type).to.eql(MessageForm);

    expect(this.wrapper.find('div')).to.have.length(1);
    expect(this.wrapper.find('section')).to.have.length(2);
    expect(this.wrapper.find(MessageList)).to.have.length(1);
    expect(this.wrapper.find(UserList)).to.have.length(1);
    expect(this.wrapper.find(MessageForm)).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find(MessageList).get(0).props.messages).to.eql(this.wrapper.state().messages);
    expect(this.wrapper.find(UserList).get(0).props.users).to.eql(this.wrapper.state().users);
    expect(this.wrapper.find(MessageForm).get(0).props.onMessageSubmit).to.eql(this.wrapper.instance().handleMessageSubmit);
    expect(this.wrapper.find(MessageForm).get(0).props.user).to.eql(this.wrapper.state().user);
  });


  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});