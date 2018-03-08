const React = require('react');

const styles = require('./styles/app.css');

const Navigation = require('./Navigation');
const Display = require('./Display');
const Footer = require('./Footer');

const sideBarLeft = `${styles.aside} ${styles.asideLeft}`;
const sideBarRight = `${styles.aside} ${styles.asideRight}`;

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