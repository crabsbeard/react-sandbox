import React from 'react';
import Button from './Button.jsx';
export default class Thumbnail extends React.Component {
    render() {
        return <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src={this.props.imgUrl} alt={this.props.imgAlt}></img>
                <div className="caption">
                    <h3>{this.props.header}</h3>
                    <p>{this.props.description}</p>
                    <p>
                        <Button title={this.props.title}  />
                    </p>
                </div>
            </div>
        </div>
    }
}
