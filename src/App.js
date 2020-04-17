import React from 'react';
import './App.css';

function App() {
  let score = 0;
  let clicked = [];
  function clicker(imgNum) {
    if (!clicked.includes(imgNum)) {
      score++;
      clicked.push(imgNum);
    } else if (clicked.includes(imgNum)) {
      score = 0;
      alert("Too bad!")
    }
    console.log(clicked)
  }

  return (
    <div className="App">
      <h1>React Clicky Game</h1>
      <p>Click on the images no more than once! Test your memory skills!</p>

      <div>
        <img alt="random Img" src="https://picsum.photos/id/237/200/" onClick={() => clicker(1)}></img>
        <img alt="random Img" src="https://picsum.photos/id/238/200/" onClick={() => clicker(2)}></img>
        <img alt="random Img" src="https://picsum.photos/id/123/200/" onClick={() => clicker(3)}></img><br></br>
        <img alt="random Img" src="https://picsum.photos/id/125//200/" onClick={() => clicker(4)}></img>
        <img alt="random Img" src="https://picsum.photos/id/132//200/" onClick={() => clicker(5)}></img>
        <img alt="random Img" src="https://picsum.photos/id/144//200/" onClick={() => clicker(6)}></img>
      </div>
    </div>
  );
}

export default App;
