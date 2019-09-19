import React from 'react';

export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello World',

        };
    }

    render() {
        return (
            <div>{this.state.text}</div>
        );
    }
}