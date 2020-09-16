import React, { Component } from 'react';
import './button.css';

class MessageBox extends Component {

    render() {
        return (
            <button
                type="button"
                className={this.props.className ? `${this.props.className} btn btn-primary` : 'btn btn-primary'}
                onClick={this.props.onClick ? this.props.onClick : void(0)}
            >
                {this.props.title}
            </button>
        )
    }
}

export default MessageBox;