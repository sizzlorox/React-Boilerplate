const React = require('react');
const ReactDOM = require('react-dom');
const ReactLoading = require('react-loading');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');
const Header1 = require('../../atoms/Header1');

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
        <section className={`${styles.gridY} ${styles.gridPaddingY} ${styles.smallGridFrame}`}>
          <Header1 className={`${styles.cell} ${styles.alignCenterMiddle} ${styles.shrink} ${styles.header} ${styles.mediumCellBlockContainer}`}>
            About
          </Header1>
          <AboutInfo />
        </section>
      )
  }
}
module.exports = About;