import React from 'react';
import Button from './Button.jsx';
import ListItem from './ListItem.jsx';

export default class Dropdown extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this); 
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            open: false
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open        
        }); 
    }

    handleItemClick(item){
        this.setState({
            open: false,
            itemTitle: item
        });
    }

    render() {
        var list = this.props.items.map(function(item) {
            return <ListItem item={item} whenItemClicked={this.handleItemClick} className={this.state.itemTitle === item ? "active" :""}/>
        }.bind(this));

        return  <div className="dropdown">
            <Button whenClicked={this.handleClick} className="btn-default" title={this.state.itemTitle || this.props.title} subTitleClassName="caret"/> 
            <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
                {list}
            </ul> 
        </div>
    }
}
