const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Organism
const HeaderOrganism = require('../../organisms/header/Header');
const QuestionsOrganism = require('../../organisms/faq/Questions');
const FooterOrganism = require('../../organisms/footer/Footer');

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
    $(document).ready(() => {
      $(document).foundation();
    });
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <section>
          <div className={styles.row}>
            <h1 className={`${styles.column} ${styles.alignCenterMiddle} ${styles.h1} ${styles.mediumCellBlockContainer}`}>
              Frequently Asked Questions
            </h1>
            <QuestionsOrganism />
          </div>
        </section>
      )
  }
}
module.exports = Faq;