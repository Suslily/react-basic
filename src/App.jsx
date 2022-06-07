import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./componets/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwtichShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setfaceShowFlag(true);
    } else {
      faceShowFlag && setfaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="pink">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="blue">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwtichShowFlag}>on/of</button>
      {faceShowFlag && <p>(￣▽￣)</p>}
      <p>{num}</p>
    </>
  );
};

export default App;
