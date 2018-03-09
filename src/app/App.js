const React = require('react');

const styles = require('./app.css');

const Navigation = require('./components/navigation/Navigation');
const Display = require('./components/display/Display');
const Footer = require('./components/footer/Footer');

class App extends React.Component {
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
        <Navigation />
        <Display />
        <Footer />
      </div>
    )
  }
}
module.exports = App;