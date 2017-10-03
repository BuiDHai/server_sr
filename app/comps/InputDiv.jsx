import React from 'react';

class InputDiv extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <p><input type="text" ref="txt" placeholder="Enter your note ..." /></p>
        <button>Send</button>
      </div>
    );
  }
}

module.exports = InputDiv;
