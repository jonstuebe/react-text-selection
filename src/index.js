import React, { Component } from "react";

export default class TextSelection extends Component {
  state = {
    selectionStart: 0,
    selectionEnd: 0
  };
  handleSelection = e => {
    this.setState({
      selectionStart: e.target.selectionStart,
      selectionEnd: e.target.selectionEnd
    });
  };
  render() {
    const { selectionStart, selectionEnd } = this.state;
    const renderProps = {
      eventProps: {
        onKeyUp: this.handleSelection,
        onMouseUp: this.handleSelection
      },
      selectionStart,
      selectionEnd
    };
    if (this.props.render) {
      return this.props.render(renderProps);
    }
    return this.props.children(renderProps);
  }
}
