import React, { Component } from 'react';
import './message.css';

class MessageBox extends Component {

    render() {
        return (
            <div className={this.props.className ? `${this.props.className} messageBox` : 'messageBox'}>
                <p>{this.props.contentOne}</p>
                {this.props.contentTwo &&
                    <p>{this.props.contentTwo}</p>
                }
            </div>
        )
    }
}

export default MessageBox;