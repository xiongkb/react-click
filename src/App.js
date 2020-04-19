import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const imgNums = [];

    for (let i = 1; i < 71; i++) {
      imgNums.push(i)
    };
    console.log(imgNums);

    this.state = {
      score: 0,
      clicked: [],
      imgNums: imgNums
    }
  }

  clicker(imgNum) {
    if (!this.state.clicked.includes(imgNum)) {
      const clicked = this.state.clicked;
      clicked.push(imgNum);
      this.setState({ score: this.state.score + 1, clicked: clicked });
    } else if (this.state.clicked.includes(imgNum)) {
      this.setState({ score: 0 });
      alert("Too bad!")
    }
    console.log("You clicked on:")
    console.log(this.state.clicked)
    console.log("--------")

  }

  render() {
    const ranImgNums = [];

    while (ranImgNums.length < 8) {
      const ranNum = this.state.imgNums[Math.floor(Math.random() * 69)];
      if (!ranImgNums.includes(ranNum)) {
        ranImgNums.push(ranNum);
      }
      
    }

    return (
      <div className="App">
        <h1>React Clicky Game</h1>
        <p>Click on the images no more than once! Test your memory skills!</p>

        <div>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[0]}`} onClick={() => this.clicker(ranImgNums[0])}></img>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[1]}`} onClick={() => this.clicker(ranImgNums[1])}></img>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[2]}`} onClick={() => this.clicker(ranImgNums[2])}></img><br></br>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[3]}`} onClick={() => this.clicker(ranImgNums[3])}></img>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[4]}`} onClick={() => this.clicker(ranImgNums[4])}></img>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[5]}`} onClick={() => this.clicker(ranImgNums[5])}></img><br></br>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[6]}`} onClick={() => this.clicker(ranImgNums[6])}></img>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[7]}`} onClick={() => this.clicker(ranImgNums[7])}></img>
          <img alt="random Img" src={`https://i.pravatar.cc/200?img=${ranImgNums[8]}`} onClick={() => this.clicker(ranImgNums[8])}></img><br></br>
        </div>

        <div>
          <h4>Your Score: {this.state.score}</h4>
        </div>
      </div>
    );
  }
}

export default App;
