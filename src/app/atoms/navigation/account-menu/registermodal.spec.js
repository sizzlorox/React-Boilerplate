const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const RegisterModal = require('./RegisterModal');

describe('Atom <RegisterModal />', function () {

  beforeEach(() => {
    this.mockId = 'Unit Test ID';
    this.mockOnSubmit = 'Unit Test OnSubmit';

    this.wrapper = shallow((<RegisterModal id={this.mockId} onSubmit={this.mockOnSubmit}/>));
  });


  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(RegisterModal.prototype, 'componentWillMount');

    const wrapper = shallow((<RegisterModal />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(RegisterModal.prototype, 'componentDidMount');

    const wrapper = shallow((<RegisterModal />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  // TODO : Find a way to mock jquery '$(`#${this.props.id}`).foundation('close');'
  xit('Calls componentWillUnmount', () => {
    const mockUnmount = sinon.spy(RegisterModal.prototype, 'componentWillUnmount');

    const wrapper = shallow((<RegisterModal id={this.mockId}/>));
    expect(mockUnmount.calledOnce).to.equal(false);
    wrapper.unmount();
    expect(mockUnmount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children[0].type).to.eql('h1');
    expect(this.wrapper.get(0).props.children[1].type).to.eql('form');
    expect(this.wrapper.get(0).props.children[1].props.children.type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[0].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[0].props.children[0].type).to.eql('label');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[0].props.children[1].type).to.eql('input');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[1].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[1].props.children[0].type).to.eql('label');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[1].props.children[1].type).to.eql('input');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[1].props.children[2].type).to.eql('p');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[2].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[2].props.children[0].type).to.eql('label');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[2].props.children[1].type).to.eql('input');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[2].props.children[2].type).to.eql('p');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[3].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[3].props.children[0].type).to.eql('label');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[3].props.children[1].type).to.eql('input');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[4].type).to.eql('div');
    expect(this.wrapper.get(0).props.children[1].props.children.props.children[4].props.children.type).to.eql('button');
    expect(this.wrapper.get(0).props.children[2].type).to.eql('button');
    expect(this.wrapper.get(0).props.children[2].props.children.type).to.eql('span');

    expect(this.wrapper.find('div').exists()).to.eql(true);
    expect(this.wrapper.find('h1').exists()).to.eql(true);
    expect(this.wrapper.find('form').exists()).to.eql(true);
    expect(this.wrapper.find('label').exists()).to.eql(true);
    expect(this.wrapper.find('input').exists()).to.eql(true);
    expect(this.wrapper.find('button').exists()).to.eql(true);
    expect(this.wrapper.find('span').exists()).to.eql(true);

    expect(this.wrapper.find('div')).to.have.length(7);
    expect(this.wrapper.find('h1')).to.have.length(1);
    expect(this.wrapper.find('form')).to.have.length(1);
    expect(this.wrapper.find('label')).to.have.length(4);
    expect(this.wrapper.find('input')).to.have.length(4);
    expect(this.wrapper.find('button')).to.have.length(2);
    expect(this.wrapper.find('p')).to.have.length(2);
    expect(this.wrapper.find('span')).to.have.length(1);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('div').get(0).props.id).to.eql(this.mockId);
    expect(this.wrapper.find('div').get(0).props['data-reveal']).to.eql(true);
    expect(this.wrapper.find('div').get(0).props['data-close-on-click']).to.eql('true');
    expect(this.wrapper.find('h1').get(0).props.children).to.eql('Register');
    expect(this.wrapper.find('form').get(0).props.onSubmit).to.eql(this.mockOnSubmit);
    expect(this.wrapper.find('label').get(0).props.children).to.eql('Username');
    expect(this.wrapper.find('input').get(0).props.type).to.eql('text');
    expect(this.wrapper.find('input').get(0).ref).to.eql('username');
    expect(this.wrapper.find('input').get(0).props.autoComplete).to.eql('username');
    expect(this.wrapper.find('input').get(0).props.maxLength).to.eql('20');
    expect(this.wrapper.find('input').get(0).props.required).to.eql(true);
    expect(this.wrapper.find('label').get(1).props.children).to.eql('Password');
    expect(this.wrapper.find('input').get(1).props.type).to.eql('password');
    expect(this.wrapper.find('input').get(1).ref).to.eql('password');
    expect(this.wrapper.find('input').get(1).props.autoComplete).to.eql('new-password');
    expect(this.wrapper.find('input').get(1).props.maxLength).to.eql('250');
    expect(this.wrapper.find('input').get(1).props.required).to.eql(true);
    expect(this.wrapper.find('label').get(2).props.children).to.eql('Confirm Password');
    expect(this.wrapper.find('input').get(2).props.type).to.eql('password');
    expect(this.wrapper.find('input').get(2).ref).to.eql('confirm-password');
    expect(this.wrapper.find('input').get(2).props.autoComplete).to.eql('new-password');
    expect(this.wrapper.find('input').get(2).props.maxLength).to.eql('250');
    expect(this.wrapper.find('input').get(2).props.required).to.eql(true);
    expect(this.wrapper.find('label').get(3).props.children).to.eql('Email');
    expect(this.wrapper.find('input').get(3).props.type).to.eql('email');
    expect(this.wrapper.find('input').get(3).ref).to.eql('email');
    expect(this.wrapper.find('input').get(3).props.autoComplete).to.eql('e-mail');
    expect(this.wrapper.find('input').get(3).props.maxLength).to.eql('250');
    expect(this.wrapper.find('input').get(3).props.required).to.eql(true);
    expect(this.wrapper.find('button').get(0).props.type).to.eql('submit');
    expect(this.wrapper.find('button').get(0).props.id).to.eql('register-submit');
    expect(this.wrapper.find('button').get(0).props.children).to.eql('Submit');
    expect(this.wrapper.find('button').get(1).props.type).to.eql('button');
    expect(this.wrapper.find('button').get(1).props['data-close']).to.eql('');
    expect(this.wrapper.find('button').get(1).props['aria-label']).to.eql('Close reveal');
    // TODO : find way to test
    // expect(this.wrapper.find('button').get(1).props.children.props.children).to.eql(×);
    expect(this.wrapper.find('button').get(1).props.children.props['aria-hidden']).to.eql('true');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});