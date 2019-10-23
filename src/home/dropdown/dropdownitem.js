import React from 'react';
import './dropdownitem.css'

export default class DropdownItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.value.title,
            content: props.value.content,
            showItems: false,
        };
    }

    render() {
        const content = this.state.content.map(item => {
            return <li key={item} ><a href={item.href}>{item.text}</a></li>;
        });
        let vis = this.state.showItems ? 'itemlist' : 'itemlistgone';
        return (
            <div onMouseOver={() => this.handleHover(true)} onMouseOut={() => this.handleHover(false)}>
                <p>
                    <a href={this.state.title.href}>{this.state.title.text}</a>
                </p>
                <ul className={vis}>
                    {content}
                </ul>
            </div>
        );
    }

    handleHover(attached) {
        this.setState({
            showItems: attached,
        });
    }
}