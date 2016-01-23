import React from 'react';
import {createElement} from 'react';
import {render} from 'react-dom';

class Badge extends React.Component {
    render() {
        return <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.count}</span>
        </button>
    } 
} 
var values = {
    title: "Inbox",
    count: 4
}

var messageBadge = createElement(Badge, values);

render(messageBadge, document.getElementById('app'));

