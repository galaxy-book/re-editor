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

  handleImageUpload = async file => {
    const formData = new FormData();
    formData.append('smfile', file);
    const res = await fetch('https://sm.ms/api/upload', {
      method: 'POST',
      body: formData
    });
    const { code, data } = await res.json();
    if (code === 'success') {
      return data.url;
    }
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
          onImageUpload={this.handleImageUpload}
        />
      </div>
    );
  }
}
