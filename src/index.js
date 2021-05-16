import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicTimeline from './timelineDemo';
import Game from './components/ticTacToe/Game';

// ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(BasicTimeline(), document.getElementById('root'));
