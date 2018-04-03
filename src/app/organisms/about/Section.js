const React = require('react');
const ReactDOM = require('react-dom');
const ReactLoading = require('react-loading');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Molecules
const AboutInfo = require('../../molecules/about/AboutInfo');

class About extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    console.log(styles);
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
        <section className={styles.row}>
          <h1 className={`${styles.cell} ${styles.alignCenterMiddle} ${styles.shrink} ${styles.h1} ${styles.mediumCellBlockContainer}`}>
            About
          </h1>
          <AboutInfo />
        </section>
      )
  }
}
module.exports = About;