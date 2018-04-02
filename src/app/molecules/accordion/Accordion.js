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
            isLoading: true,
            active: false
        };

        this.handleClick = this.handleClick.bind(this);
        let dynamicClassName = `${styles.accordionItem}`;
    }

    componentWillMount() {
        this.setState({ isLoading: true });
    }

    componentDidMount() {
        this.setState({ isLoading: false });
    }

    handleClick(event) {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        this.dynamicClassName = `${styles.accordionItem} ${this.state.active ? styles.isActive : ''}`;
        return this.state.isLoading ?
            (<Loading />)
            : (
                <li className={this.dynamicClassName} onClick={this.handleClick} data-accordion-item>
                    <Title className={styles.accordionTitle}>
                        {this.props.title}
                    </Title>
                    <Content className={`${styles.accordionContent}`} active={this.state.active}>
                        {this.props.children}
                    </Content>
                </li>
            );
    }
}
module.exports = Accordion;