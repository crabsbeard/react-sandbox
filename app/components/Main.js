import React from 'react';
import {render} from 'react-dom';

class HelloReact extends React.Component {
    render() {
        return <p>Hello React.js, You Bitch! </p>
    } 
} 

render(<HelloReact/>, document.getElementById('app'));
