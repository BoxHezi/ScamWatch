import "./App.css";

import React, { useState, useEffect } from "react";

import Input from "./components/input";

function App() {
  const [result, setResult] = useState("");

  const pasreResult = (data) => {
    console.log("Rendering result");
    console.log(data);

    const stats = data.attributes.last_analysis_stats;

    let temp = [];
    for (const [k, v] of Object.entries(stats)) {
      temp.push(k + ": " + v);
    }

    const content = temp.map((line, index) => {
      return (
        <React.Fragment key={index}>
          {line}
          {index < line.length - 1 && <br />}
        </React.Fragment>
      );
    });
    setResult(content);
  };

  useEffect(() => {
    console.log("useEffect")
  }, [result])

  return (
    <div className="App">
      <Input suspiciousType="domain" onDataReceived={pasreResult} />
      {/* <Input suspiciousType="number" onDataReceived={pasreResult} /> */}

      <div>Result: <br />{result}</div>
    </div>
  );
}

export default App;
