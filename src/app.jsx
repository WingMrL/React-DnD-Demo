import React from 'react';
import '../styles/index.scss';
import Board from './Board';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Board />
    )
  }
}
