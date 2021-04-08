import React, { useState } from "react";
import "./App.css";
import FeesResults from "./feesResults";

const App = () => {
  const [userInput, setUserInput] = useState({ quantity: "", average: "" });
  const [costProMonth, setCostProMonth] = useState();
  const [costProJahr, setCostProJahr] = useState();

  // let so I can change the value
  const handleSubmit = () => {
    let feeResult = 0;
    if (userInput.average <= 25) {
      feeResult = 0.35;
    } else if (userInput.average > 5000) {
      feeResult = (userInput.average - 5000) * 0.001 + 2;
    } else if (userInput.average > 25 && userInput.average < 143) {
      feeResult = userInput.average * 0.014;
    } else {
      feeResult = 2;
    }
    setCostProMonth(feeResult * userInput.quantity);
    setCostProJahr(feeResult * userInput.quantity * 12);
    // setCostProJahr(costProMonth * 12); ** NaN: because costProMonth dont have yet the result
  };

  // for handling multiple input fields with one handler. I funnel all changes through that one handler but then distinguish which input the change is coming from using the name.
  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput({
      ...userInput,
      [e.target.name]: value,
    });
  };

  return (
    <div className="app-container">
      <div className="user-inputs">
        <input name="quantity" placeholder="Quantity of transactions pro month" type="number" value={userInput.quantity} onChange={handleChange} />
        <input name="average" placeholder="Average of the transaction" type="number" value={userInput.average} onChange={handleChange} />
        <button onClick={handleSubmit}>Brechnen</button>
      </div>
      <div className="fees-container">
        <FeesResults text="Kosten pro Monat" total={costProMonth} />
        <FeesResults text="Kosten pro Jahr" total={costProJahr} />
      </div>
    </div>
  );
};

export default App;
