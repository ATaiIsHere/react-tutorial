import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicTimeline from './timelineDemo';
import Game from './components/ticTacToe/Game';
import CountdownTime from './components/flipClock/CountdownTimer';
import FlipClock from './components/flipClock/FlipClock';

// ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));
// ReactDOM.render(BasicTimeline(), document.getElementById('root'));
ReactDOM.render(<CountdownTime targetTime={new Date('2021-05-31T10:20:30Z')} />, document.getElementById('root'));
// ReactDOM.render(<FlipClock />, document.getElementById('root'));
