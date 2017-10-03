import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }
  add() {
    var vl = this.refs.txt.value;
    this.refs.txt.value = '';
    if ( vl != '' ) {
      this.props.addNote(vl);
    } else {
      return false;
    }

  }

  render() {
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note..." />
        <br/>
        <button onClick={this.add}>Add Item</button>
      </div>
    );
  }
}

module.exports = NoteForm;
