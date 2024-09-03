import React, { useState } from "react";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    let name1Arr = name1.split("");
    let name2Arr = name2.split("");

    name1Arr.forEach((char) => {
      const index = name2Arr.indexOf(char);
      if (index !== -1) {
        name2Arr.splice(index, 1);
        name1Arr.splice(name1Arr.indexOf(char), 1);
      }
    });

    const remainingLength = name1Arr.length + name2Arr.length;
    const flames = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];
    const relationship = flames[remainingLength % 6];

    setResult(relationship);
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div>
      <input
        data-testid="input1"
        name="name1"
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        data-testid="input2"
        name="name2"
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship
      </button>
      <button data-testid="clear" onClick={clearFields}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
