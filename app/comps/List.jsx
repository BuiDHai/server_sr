import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.save = this.save.bind(this);
  }

  add(text) {
    axios.post("/add", {note: text}).then(res => {
      this.state.data = res.data;
      this.setState({data: this.state.data});
    });
  }

  save(index, text) {
    this.state.data.splice(index, 1, text);
    this.setState(this.state);
  }

  del(index) {
    axios.post("/delete", {idDelete: index})
    .then(res => {
      this.state.data = res.data;
      this.setState({data: this.state.data});
    });
  }

  render() {
    return (
      <div>
        <NoteForm addNote={this.add} />
        {this.state.data.map((e, index) => {
          return <Note key={index} saveUpdate={this.save} remove={this.del} index={index}>{e}</Note>
        })}
      </div>
    );
  }

  componentDidMount() {
    axios.post("/getNotes")
    .then(res => {
      let data = res.data;
      this.setState({
        data: data,
        process: true
      });
    });
  }
}

module.exports = List;
