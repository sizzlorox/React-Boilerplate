const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Atoms
const Loading = require('./Loading');

describe('Atom <Loading />', function () {

  beforeEach(() => {
    this.mockChildren = 'Unit Test Children';

    this.wrapper = shallow((<Loading />));
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.find('div').exists()).to.eql(true);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('div').get(0).props.children).to.eql('Loading...');
  });

});