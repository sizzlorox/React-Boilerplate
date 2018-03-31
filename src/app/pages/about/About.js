const React = require('react');
const ReactDOM = require('react-dom');
const ReactLoading = require('react-loading');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Organism
const HeaderOrganism = require('../../organisms/header/Header');
const SectionOrganism = require('../../organisms/about/Section');
const FooterOrganism = require('../../organisms/footer/Footer');

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
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div>
          <HeaderOrganism />
          <SectionOrganism />
          <FooterOrganism />
        </div>
      )
  }
}
module.exports = About;