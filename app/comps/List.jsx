import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }

    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.save = this.save.bind(this);
  }

  add(text) {
    axios.post("/getNotes", {note: text}).then(res => {
      this.state.datas.push(res.datas);
      this.setState({datas: this.state.datas});
    });
  }

  save(index, text) {
    this.state.datas.splice(index, 1, text);
    this.setState(this.state);
  }

  del(index) {
    this.state.datas.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <NoteForm addNote={this.add} />
        {this.state.datas.map((e, index) => {
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
        datas: data,
        process: true
      });
    });
  }
}

module.exports = List;
