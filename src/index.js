import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import BasicRoute from './App';

ReactDOM.render(
    <div>
        <Game /><br />
        <a href='./dropdown'>dropdown</a>
        <BasicRoute />
    </div>,
    document.getElementById('root')
);