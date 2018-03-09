const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');
const { Route, Switch, BrowserRouter } = require('react-router-dom');

// Components
const Display = require('./Display');
const Home = require('../../views/home/Home');
const About = require('../../views/about/About');

describe('<Display />', function () {

  beforeEach(() => {
    this.displayWrapper = shallow(<Display />);
  });

  it('Contains route components', () => {
    expect(this.displayWrapper.find(Switch)).to.have.length(1);
    expect(this.displayWrapper.find(Route)).to.have.length(3);
  });

  it('Correct types', () => {
    expect(this.displayWrapper.get(0).type).to.eql(Switch);
    expect(this.displayWrapper.get(0).props.children[0].type).to.eql(Route);
    expect(this.displayWrapper.get(0).props.children[1].type).to.eql(Route);
    expect(this.displayWrapper.get(0).props.children[2].type).to.eql(Route);
  });

  it ('Routes to correct path', () => {
    expect(this.displayWrapper.get(0).props.children[0].props.path).to.eql('/');
    expect(this.displayWrapper.get(0).props.children[1].props.path).to.eql('/about');
  });

  it ('Routes to correct view', () => {
    expect(this.displayWrapper.get(0).props.children[0].props.component).to.eql(Home);
    expect(this.displayWrapper.get(0).props.children[1].props.component).to.eql(About);
  });

  it('Initialized with state foo', () => {
    expect(this.displayWrapper.state().foo).to.eql('bar');
  });

  it('Allows us to set state', () => {
    this.displayWrapper.setState({ bar: 'foo' });
    expect(this.displayWrapper.state().bar).to.eql('foo');
  });

});