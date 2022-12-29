import React from 'react';
import useState from 'react';
import clsx from 'clsx';

// TODO: reimplement this in Capy with WASM
// this would be easier to do than wtf react does but this depends on stage2 shipping async so the WASM backend works again

export default class AlignExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alignX: 0.5, alignY: 0.5 };

    this.changeAlignX = this.changeAlignX.bind(this);
    this.changeAlignY = this.changeAlignY.bind(this);
  }

  changeAlignX(event) {
    this.setState({ alignX: event.target.value });
  }

  changeAlignY(event) {
    this.setState({ alignY: event.target.value });
  }

  render() {
    return (
      <div>
        <div style={{ width: '200px', height: '200px', backgroundColor: 'grey' }}>
          <button className="button button--secondary" style={{
            position: 'relative',
            left: this.state.alignX * 200,
            top: this.state.alignY * 200,
            translate: (-this.state.alignX * 100) + '% ' + (-this.state.alignY * 100) + '%'
          }}>Bloody hell</button>
        </div>
        <input type="range" min="0" max="1" value={this.state.alignX} onChange={this.changeAlignX} step="0.02" />
        <span>alignX = {this.state.alignX}</span>
        <br></br>

        <input type="range" min="0" max="1" value={this.state.alignY} onChange={this.changeAlignY} step="0.02" />
        <span>alignY = {this.state.alignY}</span>

        <p>Here's the equivalent code in CSS:</p>
        <pre>{`button {
  position: relative;
  left: `}{ Math.floor(this.state.alignX * 200) }{`px;
  top: `}{ Math.floor(this.state.alignY * 200) }{`px;
  translate: `}{ Math.floor(-this.state.alignX * 100) }% { Math.floor(-this.state.alignY * 100) }%{`;
}`}</pre>
      </div>
    );
  }
}
