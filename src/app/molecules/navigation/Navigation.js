const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');
const NavTo = require('../../atoms/navigation/NavTo');

class Navigation extends React.Component {
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
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <section>
          <ul className={styles.menu}>
            <li>
              <NavTo url='/'>
                Home
              </NavTo>
            </li>
            <li>
              <NavTo url='/about'>
                About
              </NavTo>
            </li>
            <li>
              <NavTo url='/faq'>
                FAQ
              </NavTo>
            </li>
          </ul>
        </section>
      )
  }
}
module.exports = Navigation;