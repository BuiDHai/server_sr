import React from 'react';
import ReactDOM from 'react-dom';

// var Note = createReactClass({
//   del() {
//     this.props.remove(this.props.index);
//   },
//   render() {
//     return (
//       <div>
//         <p>{this.props.children}</p>
//         <button onClick={this.del}>Delete</button>
//       </div>
//     );
//   }
// });
//
// var List = createReactClass({
//   add(text) {
//     this.state.mang.push(text);
//     this.setState(this.state);
//   },
//   del(index) {
//     this.state.mang.splice(index, 1);
//     this.setState(this.state);
//   },
//   getInitialState() {
//     return {mang: ["Android", "NodeJS", "ReactJS"]}
//   },
//   render() {
//     return (
//       <div>
//         <NoteForm addNote={this.add} />
//         {this.state.mang.map((e, index) => {
//           return <Note key={index} remove={this.del} index={index}>{e}</Note>
//         })}
//       </div>
//     );
//   }
// });
//
// var NoteForm = createReactClass ({
//   add() {
//     var vl = this.refs.txt.value;
//     this.refs.txt.value = '';
//     this.props.addNote(vl);
//   },
//   render() {
//     return (
//       <div>
//         <input type="text" ref="txt" placeholder="Enter your note..." />
//         <br/>
//         <button onClick={this.add}>Add Item</button>
//       </div>
//     );
//   }
// });

var List = require('./comps/List.jsx');

ReactDOM.render(
  <div>
    <List/>
  </div>
  , document.getElementById('root')
);
