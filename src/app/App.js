const React = require('react');

const styles = require('./app.css');

const Navigation = require('./components/navigation/Navigation');
const Display = require('./components/display/Display');
const Footer = require('./components/footer/Footer');

class App extends React.Component {
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
      <div className={styles.wrapper}>
        <Navigation styles={styles} />
        <Display styles={styles} />
        <Footer styles={styles} />
      </div>
    )
  }
}
module.exports = App;