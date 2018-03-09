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

  it('Initialized with state foo', () => {
    expect(this.displayWrapper.state().foo).to.equal('bar');
  });

  it('Allows us to set state', () => {
    this.displayWrapper.setState({ bar: 'foo' });
    expect(this.displayWrapper.state().bar).to.equal('foo');
  });

});