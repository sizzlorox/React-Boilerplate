const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Organisms
const HeaderOrganism = require('../../organisms/header/Header');
const FooterOrganism = require('../../organisms/footer/Footer');

class Home extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar'
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    $('#home').ready(() => {
      $('#home').foundation();
    });
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div id='home'>
        </div>
      )
  }
}
module.exports = Home;