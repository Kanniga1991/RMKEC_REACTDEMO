import { useState } from "react";
import "./App.css";
export function Voting(props) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div
      className="Votes"
      style={
        like > dislike ? { background: "pink" } : { background: "powderblue" }
      }
    >
      
      <h1>{props.brandname}</h1>
      <img src ={props.img}/>
      <h4>{props.model}</h4>
      <h2>Specifications</h2>
      <ul>
        <li>{props.specific.Os}</li>
        <li>{props.specific.Processor}</li>
        <li>{props.specific.Storage}</li>
      </ul>
      
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
      
    </div>
  );
}
