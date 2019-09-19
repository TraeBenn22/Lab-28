import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../components/message'

import './styles.css';

class App extends React.Component {
  render() {
    return <div>
      <Message/>>
    </div>
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
