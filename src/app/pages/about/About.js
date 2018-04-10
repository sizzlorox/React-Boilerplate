const React = require('react');
const ReactDOM = require('react-dom');
const ReactLoading = require('react-loading');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Organism
const Section = require('../../organisms/about/Section');

class About extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    $('#about').ready(() => {
      $('#about').foundation();
    });
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div id='about'>
          <Section />
        </div>
      )
  }
}
module.exports = About;