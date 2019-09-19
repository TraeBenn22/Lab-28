
import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/form';

import './styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: 'Your text here',
        };
    }

    handleFormUpdate = () => {
        this.setState({  count: this.state.count + 1 });
    };

    render() {
        return (
            <>
                <p>happy</p>
                <Form handleFormUpdate={this.handleFormUpdate} />


            </>
        );
    }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);