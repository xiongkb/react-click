import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      clicked: [],
      imgNums: [237, 238, 123, 125, 132, 144]
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
    console.log(this.state.clicked)
  }

  render() {
    const ranImgNums = [];

    while (ranImgNums.length < 6) {
      const ranNum = this.state.imgNums[Math.floor(Math.random() * 6)];
      if (!ranImgNums.includes(ranNum)) {
        ranImgNums.push(ranNum);
      }
      console.log(ranImgNums)
    }

    return (
      <div className="App">
        <h1>React Clicky Game</h1>
        <p>Click on the images no more than once! Test your memory skills!</p>

        <div>
          <img alt="random Img" src={`https://picsum.photos/id/${ranImgNums[0]}/200/`} onClick={() => this.clicker(1)}></img>
          <img alt="random Img" src={`https://picsum.photos/id/${ranImgNums[1]}/200/`} onClick={() => this.clicker(2)}></img>
          <img alt="random Img" src={`https://picsum.photos/id/${ranImgNums[2]}/200/`} onClick={() => this.clicker(3)}></img><br></br>
          <img alt="random Img" src={`https://picsum.photos/id/${ranImgNums[3]}/200/`} onClick={() => this.clicker(4)}></img>
          <img alt="random Img" src={`https://picsum.photos/id/${ranImgNums[4]}/200/`} onClick={() => this.clicker(5)}></img>
          <img alt="random Img" src={`https://picsum.photos/id/${ranImgNums[5]}/200/`} onClick={() => this.clicker(6)}></img>
        </div>
      </div>
    );
  }
}

export default App;
