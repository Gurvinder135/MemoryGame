import React, { useState } from "react";
import bee from "./img/bee.png";
import bird from "./img/bird.png";
import cat from "./img/cat.png";
import dog from "./img/dog.png";
import elephant from "./img/elephant.png";
import koala from "./img/koala.png";
import lion from "./img/lion.png";
import monkey from "./img/monkey.png";
import octopus from "./img/octopus.png";
import penguin from "./img/penguin.png";
import turtle from "./img/turtle.png";
import whale from "./img/whale.png";
const Main = () => {
  const arr = [
    { name: bee, id: 0 },
    { name: bird, id: 1 },
    { name: cat, id: 2 },
    { name: dog, id: 3 },
    { name: elephant, id: 4 },
    { name: koala, id: 5 },
    { name: lion, id: 6 },
    { name: monkey, id: 7 },
    { name: octopus, id: 8 },
    { name: penguin, id: 9 },
    { name: turtle, id: 10 },
    { name: whale, id: 11 },
  ];

  let randarr = [];
  const randFunc = ((arr) => {
    const newarr = [...arr];
    let temp = [];
    for (let i = 0; i < 9; i++) {
      let rand = Math.floor(Math.random() * newarr.length);
      temp.push(newarr.splice(rand, 1));
    }
    randarr = [...temp];
  })(arr);

  const [score, setScore] = useState(0);
  const [bestscore, setBestscore] = useState(0);
  const [checkarr, setCheckarr] = useState([]);

  const clicked = (e) => {
    let temparr = [];
    let exist = 0;
    if (e.target.tagName === "IMG") {
      for (const a in checkarr) {
        if (checkarr[a][0] === e.target.id) {
          exist = 1;
          if (score > bestscore) {
            setBestscore(score);
          }
          setScore(0);
          setCheckarr([]);
          console.log(
            e.target.parentElement.parentElement.parentElement.parentElement
              .parentElement.childNodes
          );
          e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
            "bg"
          );
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].classList.add(
            "bg"
          );
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[2].classList.remove(
            "hide"
          );
          break;
        }
      }
      if (exist !== 1) {
        temparr.push(e.target.id);

        setCheckarr([...checkarr, temparr]);
        exist = 0;

        setScore(score + 1);
      }
    }
  };
  return (
    <div>
      <div className="header">
        <div>
          <div className="score">Current Score {score}</div>
          <div className="score">Best Score {bestscore}</div>
        </div>
      </div>
      <div className="main">
        <div className="container" onClick={clicked}>
          <div className="img">
            <img src={randarr[0][0].name} id={randarr[0][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[1][0].name} id={randarr[1][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[2][0].name} id={randarr[2][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[3][0].name} id={randarr[3][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[4][0].name} id={randarr[4][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[5][0].name} id={randarr[5][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[6][0].name} id={randarr[6][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[7][0].name} id={randarr[7][0].id} alt="" />
          </div>
          <div className="img">
            <img src={randarr[8][0].name} id={randarr[8][0].id} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
