const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Molecules
const FooterMolecule = require('../../molecules/footer/Footer');

// Oganisms
const Footer = require('./Footer');

describe('Organism <Footer />', function () {

  beforeEach(() => {
    this.wrapper = shallow((<Footer />));
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Footer.prototype, 'componentWillMount');

    const wrapper = shallow((<Footer />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Footer.prototype, 'componentDidMount');

    const wrapper = shallow((<Footer />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('footer');
    expect(this.wrapper.find('Footer')).to.have.length(1);
    expect(this.wrapper.find('Footer').get(0).type).to.eql(FooterMolecule);
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});