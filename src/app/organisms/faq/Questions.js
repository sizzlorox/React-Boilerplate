const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');

// Molecules
const AccordionMolecule = require('../../molecules/accordion/Accordion');

class Questions extends React.Component {
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
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <ul className={`${styles.cell} ${styles.medium8} ${styles.mediumCellBlock} ${styles.accordion}`} data-accordion data-multi-expand='true' data-allow-all-closed='true'>
          <AccordionMolecule title='What is the point of this boilerplate?'>
            This boilerplate is to learn on how to use React while reaching out to others to contribute their knowledge on efficiently and cleanly utilizing ReactJS
          </AccordionMolecule>
          <AccordionMolecule title='Why are you doing this?'>
            To learn and also to help others.
          </AccordionMolecule>
          <AccordionMolecule title='Is there anything I can do to help?'>
            Contribute what you know about React!
          </AccordionMolecule>
        </ul>
      )
  }
}
module.exports = Questions;