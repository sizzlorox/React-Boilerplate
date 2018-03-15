const React = require('react');
const ReactDOM = require('react-dom');

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

  render() {
    return (
      <div>
        <HeaderOrganism />
        <FooterOrganism />
      </div>
    )
  }
}
module.exports = Home;