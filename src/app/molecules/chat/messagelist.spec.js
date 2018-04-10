const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const MessageList = require('./MessageList');

describe('Molecule <MessageList />', function () {

  beforeEach(() => {
    this.mockMessages = ['Unit', 'Test'];
    this.wrapper = shallow((<MessageList messages={this.mockMessages}/>));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(MessageList.prototype, 'componentWillMount');

    const wrapper = shallow((<MessageList messages={this.mockMessages}/>));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(MessageList.prototype, 'componentDidMount');

    const wrapper = shallow((<MessageList messages={this.mockMessages}/>));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Change Handler is called', () => {
    const mockChangeHandler = sinon.spy(MessageList.prototype, 'handleChange');
    const wrapper = shallow((<MessageList messages={this.mockMessages}/>));
    wrapper.find('textarea').simulate('change', {
      target: {
        value: this.mockMessages
      }
    });
    expect(mockChangeHandler.calledOnce).to.eql(true);
    expect(wrapper.state().messages).to.eql(this.mockMessages);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children.type).to.eql('textarea');

    expect(this.wrapper.find('div')).to.have.length(1);
    expect(this.wrapper.find('textarea')).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('textarea').get(0).props.id).to.eql('chatbox');
    expect(this.wrapper.find('textarea').get(0).props.onChange).to.eql(this.wrapper.instance().handleChange);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});