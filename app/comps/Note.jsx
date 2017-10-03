import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onEdit: false
    }
    this.del = this.del.bind(this);
    this.edit = this.edit.bind(this);
    this.cancle = this.cancle.bind(this);
    this.save = this.save.bind(this);
  }
  del() {
    this.props.remove(this.props.index);
  }
  edit() {
    this.setState({onEdit: true});
  }
  cancle() {
    this.setState({onEdit: false});
  }
  save() {
    var item = this.props.index;
    var textUpdate = this.refs.txt.value;
    this.refs.txt.value = '';
    if(textUpdate != '') {
      this.props.saveUpdate(item, textUpdate);
      this.setState({onEdit: false})
    }else {
      return false;
    }
  }
  render() {
    if(this.state.onEdit) {
      return (
        <div className="div-note">
          <p><input defaultValue={this.props.children} ref="txt" /></p>
          <button onClick={this.save}>Save</button>
          <button onClick={this.cancle}>Cancle</button>
        </div>
      );
    } else {
      return (
        <div className="div-note">
          <p>{this.props.children}</p>
          <button onClick={this.del}>Delete</button>
          <button onClick={this.edit}>Edit</button>
        </div>
      );
    }
  }
}

module.exports = Note;
