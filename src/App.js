import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [hit, setHit] = useState(0);
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [bubble, setBubble] = useState([]);

  const generateBubbles = () => {
    const newBubbles = [];
    for (let i = 0; i < 154; i++) {
      let rn = Math.floor(Math.random() * 10);
      newBubbles.push(<div className="bubble">{rn}</div>);
    }
    setBubble(newBubbles);
  };

  useEffect(() => {
    generateBubbles();
    let h = Math.floor(Math.random() * 10);
    setHit(h);
  }, []);

  useEffect(() => {
    if (time > 0) {
      var timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearTimeout(timer);
      setBubble([]);
    }
  }, [time]);

  const increasescore = (event) => {
    if (event.target.classList.contains("bubble")) {
      const clickedBubbleValue = event.target.textContent;
      if (parseInt(clickedBubbleValue) == hit) {
        setScore((prevScore) => prevScore + 10);
        generateBubbles();
      }
    }
  };

  return (
    <div className="App">
      <h1>Bubble Game</h1>
      <div className="wrapper">
        <div className="nav">
          <p>
            Hit: <span className="data">{hit}</span>
          </p>
          <p>
            Time: <span className="data">{time}</span>
          </p>
          <p>
            Score: <span className="data">{score}</span>
          </p>
        </div>
        {bubble.length > 0 ? (
          <div className="bubblewrap" onClick={() => increasescore(event)}>
            {bubble}
          </div>
        ) : (
          <div className="gameover">
            <h1>GAME OVER</h1>
            <h2>Final Score: {score}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
