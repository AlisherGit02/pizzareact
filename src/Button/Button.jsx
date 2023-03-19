import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>
          {this.props.children}{' '}
        </button>
      </div>
    );
  }
}

export default Button;
