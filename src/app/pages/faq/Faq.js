const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Organism
const Questions = require('../../organisms/faq/Questions');

class Faq extends React.Component {
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
    $('#faq').ready(() => {
      $('#faq').foundation();
    });
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <section id='faq'>
          <div className={`${styles.gridY}`}>
            <h1 className={`${styles.cell} ${styles.alignCenterMiddle} ${styles.h1} ${styles.mediumCellBlockContainer}`}>
              Frequently Asked Questions
            </h1>
            <div className={`${styles.gridX} ${styles.alignCenterMiddle}`}>
              <Questions />
            </div>
          </div>
        </section>
      )
  }
}
module.exports = Faq;