import React from 'react';
import useState from 'react';
import clsx from 'clsx';
import './styles.module.css';
import { Resizable } from 'react-resizable';

// TODO: reimplement this in Capy with WASM
// this would be easier to do than wtf react does but this depends on stage2 shipping async so the WASM backend works again

export default class AlignExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alignX: 0.5,
      alignY: 0.5,
      width: 200,
      height: 200,
    };

    this.changeAlignX = this.changeAlignX.bind(this);
    this.changeAlignY = this.changeAlignY.bind(this);
    this.onResize = this.onResize.bind(this);
    this.alignContainer = React.createRef();
  }

  changeAlignX(event) {
    this.setState({ alignX: event.target.value });
  }

  changeAlignY(event) {
    this.setState({ alignY: event.target.value });
  }

  onResize(event, { element, size, handle }) {
    this.setState({ width: size.width, height: size.height });
  }

  render() {
    return (
      <div>
        <link href="https://react-grid-layout.github.io/react-resizable/css/styles.css" rel="stylesheet"></link>
        <Resizable width={this.state.width} height={this.state.height} onResize={this.onResize} minConstraints={[150, 150]} maxConstraints={[700, 700]}>
          <div style={{ backgroundColor: 'grey', width: this.state.width + 'px', height: this.state.height + 'px' }}>
            <button className="button button--secondary" style={{
              position: 'relative',
              left: this.state.alignX * this.state.width,
              top: this.state.alignY * this.state.height,
              translate: (-this.state.alignX * 100) + '% ' + (-this.state.alignY * 100) + '%'
            }}>Bloody hell</button>
          </div>
        </Resizable>
        <input type="range" min="0" max="1" value={this.state.alignX} onChange={this.changeAlignX} step="0.02" />
        <span><code>Align.x</code> = {this.state.alignX}</span>
        <br></br>

        <input type="range" min="0" max="1" value={this.state.alignY} onChange={this.changeAlignY} step="0.02" />
        <span><code>Align.y</code> = {this.state.alignY}</span>
        <pre>{`Align(
  .{ .x = `}{this.state.alignX}{`, .y = `}{this.state.alignY}{` },
  Button(.{ .label = "Bloody hell" })
);`}</pre>

        <p>Here's the equivalent code in CSS:</p>
        <pre>{`button {
  position: relative;
  left: `}{ Math.floor(this.state.alignX * this.state.width) }{`px;
  top: `}{ Math.floor(this.state.alignY * this.state.height) }{`px;
  translate: `}{ Math.floor(-this.state.alignX * 100) }% { Math.floor(-this.state.alignY * 100) }%{`;
}`}</pre>
        <p><i>Note that the CSS code assumes the container has a size of {this.state.width}px x {this.state.height}px</i></p>
      </div>
    );
  }
}
