const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Molecules
const AccordionMolecule = require('../../molecules/accordion/Accordion');

class Questions extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <ul className={styles.accordion} data-accordion data-multi-expand='true'>
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