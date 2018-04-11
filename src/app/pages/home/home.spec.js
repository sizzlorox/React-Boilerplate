const React = require('react');
const { expect } = require('chai');
const { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

// Pages
const Home = require('./Home');

describe('Page <Home />', function () {

  beforeEach(() => {
    this.mockLaunches = [{
      provider: 'Provider Test',
      location: 'Location Test',
      vehicle: 'Vehicle Test',
      payload: 'Payload Test',
      launchtime: 'Launch Time Test',
      delayed: true
    }];

    global.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
      resolve({
        ok: true,
        Id: '123',
        json: () => {
          return { result: this.mockLaunches };
        }
      });
    }));

    this.wrapper = shallow((<Home />));
    this.wrapper.setState({ launches: this.mockLaunches });
  });

  it('Calls componentWillMount', () => {
    const mockWillMount = sinon.spy(Home.prototype, 'componentWillMount');

    const wrapper = shallow((<Home />));
    expect(mockWillMount.calledOnce).to.equal(true);
  });

  it('Calls componentDidMount', () => {
    const mockDidMount = sinon.spy(Home.prototype, 'componentDidMount');

    const wrapper = shallow((<Home />));
    expect(mockDidMount.calledOnce).to.equal(true);
  });

  it('Correct types', () => {
    expect(this.wrapper.get(0).type).to.eql('div');
    expect(this.wrapper.get(0).props.children.type).to.eql('table');
    expect(this.wrapper.get(0).props.children.props.children[0].type).to.eql('thead');
    expect(this.wrapper.get(0).props.children.props.children[1].type).to.eql('tbody');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children[0].type).to.eql('tr');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children[0].props.children[0].type).to.eql('td');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children[0].props.children[1].type).to.eql('td');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children[0].props.children[2].type).to.eql('td');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children[0].props.children[3].type).to.eql('td');
    expect(this.wrapper.get(0).props.children.props.children[1].props.children[0].props.children[4].type).to.eql('td');

    expect(this.wrapper.find('div')).to.have.length(1);
    expect(this.wrapper.find('table')).to.have.length(1);
    expect(this.wrapper.find('thead')).to.have.length(1);
    expect(this.wrapper.find('tbody')).to.have.length(1);
    expect(this.wrapper.find('tr')).to.have.length(2);
    expect(this.wrapper.find('td')).to.have.length(12);
  });

  it('Correct props', () => {
    expect(this.wrapper.find('div').get(0).props.id).to.eql('home');
    expect(this.wrapper.find('td').get(0).props.children).to.eql('Provider');
    expect(this.wrapper.find('td').get(1).props.children).to.eql('Location');
    expect(this.wrapper.find('td').get(2).props.children).to.eql('Vehicle');
    expect(this.wrapper.find('td').get(3).props.children).to.eql('Payload');
    expect(this.wrapper.find('td').get(4).props.children).to.eql('Launch Time');
    expect(this.wrapper.find('td').get(5).props.children).to.eql('Delayed');
    expect(this.wrapper.find('td').get(6).props.children).to.eql('Provider Test');
    expect(this.wrapper.find('td').get(7).props.children).to.eql('Location Test');
    expect(this.wrapper.find('td').get(8).props.children).to.eql('Vehicle Test');
    expect(this.wrapper.find('td').get(9).props.children).to.eql('Payload Test');
    expect(this.wrapper.find('td').get(10).props.children).to.eql('Launch Time Test');
    expect(this.wrapper.find('td').get(11).props.children).to.eql('No');
  });

  it('Initialized with state isLoading', () => {
    expect(this.wrapper.state()).to.have.property('isLoading');
  });

  it('Allows us to set state', () => {
    this.wrapper.setState({ isLoading: true });
    expect(this.wrapper.state().isLoading).to.eql(true);
  });

});