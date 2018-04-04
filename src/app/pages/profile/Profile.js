const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Organisms
const HeaderOrganism = require('../../organisms/header/Header');
const FooterOrganism = require('../../organisms/footer/Footer');

class Profile extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    console.log(styles);
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
        <div id='profile'>
          <section>
            <div className={styles.gridContainer}>
              <div className={`${styles.gridX} ${styles.gridMarginX} ${styles.alignCenterLeft}`}>
                <img className={`${styles.cell} ${styles.shrink} ${styles.thumbnail}`} src='http://via.placeholder.com/64x64' />
                <span className={`${styles.cell}`}>
                  UserName
                </span>
              </div>
            </div>
          </section>
        </div>
      )
  }
}
module.exports = Profile;