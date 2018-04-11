const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');

class Profile extends React.Component {
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
    $('#profile').ready(() => {
      $('#profile').foundation();
    });
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <section id='profile'>
          <div className={styles.gridContainer}>
            <div className={`${styles.gridX} ${styles.gridMarginX} ${styles.alignCenterLeft}`}>
              <img className={`${styles.cell} ${styles.shrink} ${styles.thumbnail}`} src='http://via.placeholder.com/64x64' />
              <span className={`${styles.cell}`}>
                UserName
                </span>
            </div>
          </div>
          <div className={styles.gridContainer}>
            <div className={`${styles.gridX} ${styles.gridMarginX} ${styles.alignCenterMiddle}`}>
              <span className={`${styles.cell}`}>
                TEST
                </span>
              <span className={`${styles.cell}`}>
                TEST2
                </span>
            </div>
          </div>
        </section>
      )
  }
}
module.exports = Profile;