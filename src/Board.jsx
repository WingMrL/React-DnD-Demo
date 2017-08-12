import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';
import { partial } from 'lodash';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';

class Board extends Component {

  constructor(props) {
    super(props);
    this.changePosition = this.changePosition.bind(this);
    this.state = {
      knightPosition: [0, 0]
    };
  }

  changePosition(x, y) {
    this.setState({
      knightPosition: [x, y]
    })
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.state.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i}
          style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x}
                    y={y}
                    changePosition={ this.changePosition }
                    >
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);