const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');
const Span = require('../../atoms/Span');

class Footer extends React.Component {
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
        <div className={`${styles.cell} ${styles.mediumCellBlockContainer} ${styles.alignCenterMiddle}`}>
          <Span>
            Copyright here.
          </Span>
        </div>
      )
  }
}
module.exports = Footer;