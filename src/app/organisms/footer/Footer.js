const React = require('react');
const ReactDOM = require('react-dom');

// Molecules
const FooterMolecules = require('../../molecules/footer/Footer');

class Footer extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <footer>
        <FooterMolecules />
      </footer>
    )
  }
}
module.exports = Footer;