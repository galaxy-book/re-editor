import React from 'react';
import GalaxyEditor from 'galaxy-editor';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: JSON.parse(localStorage.getItem('galaxy-editor-value'))
    };
  }

  handleChange = value => {
    localStorage.setItem('galaxy-editor-value', JSON.stringify(value.toJS()));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <h1>GalaxyEditor</h1>
        <GalaxyEditor
          value={value}
          onChange={this.handleChange}
          placeholder="请输入内容"
          tools={[
            ['bold', 'italic', 'underline', 'strikethrough'],
            ['orderedlist', 'unorderedlist'],
            ['heading'],
            ['align'],
            ['image', 'table', 'code'],
            ['undo', 'redo'],
            ['fullscreen']
          ]}
        />
      </div>
    );
  }
}
