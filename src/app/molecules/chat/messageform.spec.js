const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const MessageForm = require('./MessageForm');

describe('Molecule <MessageForm />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<MessageForm />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(MessageForm.prototype, 'componentWillMount');

    const wrapper = shallow((<MessageForm />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(MessageForm.prototype, 'componentDidMount');

    const wrapper = shallow((<MessageForm />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('form');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('input');
    expect(this.wrapper.get(0).props.children[1].type).to.eql('button');

    expect(this.wrapper.find('form')).to.have.length(1);
    expect(this.wrapper.find('input')).to.have.length(1);
    expect(this.wrapper.find('button')).to.have.length(1);
  });

  it('Handles Submit', () => {
    const mockSubmitMessage = () => {};
    const mockSubmit = sinon.spy(MessageForm.prototype, 'handleSubmit');
    const wrapper = shallow((<MessageForm onMessageSubmit={mockSubmitMessage}/>));
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { },
      message: 'test'
    });
    expect(mockSubmit.calledOnce).to.eql(true);
  });

  it('Change Handler is called', () => {
    const mockChangeHandler = sinon.spy(MessageForm.prototype, 'changeHandler');
    const wrapper = shallow((<MessageForm />));
    wrapper.find('input').simulate('change', {
      target: {
        value: 'test'
      }
    });
    expect(mockChangeHandler.calledOnce).to.eql(true);
    expect(wrapper.state().text).to.eql('test');
  });

  it('Correct props', () => {
    expect(this.wrapper.find('form').get(0).props.onSubmit).to.eql(this.wrapper.instance().handleSubmit);
    expect(this.wrapper.find('input').get(0).props.onChange).to.eql(this.wrapper.instance().changeHandler);
    expect(this.wrapper.find('button').get(0).props.children).to.eql('Send');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});