import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mang: ["Android", "NodeJS", "ReactJS", "ES6", "PHP"]
    }

    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.save = this.save.bind(this);
  }

  add(text) {
    this.state.mang.push(text);
    this.setState(this.state);
  }

  save(index, text) {
    this.state.mang.splice(index, 1, text);
    this.setState(this.state);
  }

  del(index) {
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <NoteForm addNote={this.add} />
        {this.state.mang.map((e, index) => {
          return <Note key={index} saveUpdate={this.save} remove={this.del} index={index}>{e}</Note>
        })}
      </div>
    );
  }
}

module.exports = List;
