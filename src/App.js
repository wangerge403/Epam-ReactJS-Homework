import React from 'react';
import './App.css';
// import { Task1CreateEle, Task1Comp, Task1PureComp, Task1Func } from './Task1';
import MovieList from './pages/MoviesList/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
      </header>
    </div>
  );
}

export default App;
