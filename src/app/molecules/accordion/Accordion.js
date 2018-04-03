const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');
const Title = require('../../atoms/accordion/Title');
const Content = require('../../atoms/accordion/Content');

class Accordion extends React.Component {
    // Should initialize state in constructor instead of getInitialState when using ES6 Classes
    constructor(props) {
        super(props);
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
                <li className={styles.accordionItem} data-accordion-item>
                    <Title className={styles.accordionTitle}>
                        {this.props.title}
                    </Title>
                    <Content className={`${styles.accordionContent}`}>
                        {this.props.children}
                    </Content>
                </li>
            );
    }
}
module.exports = Accordion;