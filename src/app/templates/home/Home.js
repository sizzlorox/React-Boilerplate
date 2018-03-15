const React = require('react');
const ReactDOM = require('react-dom');

// Organisms
const HeaderOrganism = require('../../organisms/header/Header');

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
      <HeaderOrganism />
    )
  }
}
module.exports = Home;