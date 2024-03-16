import { useState } from "react";
import styles from "./conduction.module.css";
// import { distance } from "framer-motion";

function Conduction() {
  const [coefficient, setcoefficient] = useState(0);
  const [temperature, settemperature] = useState(0);
  const [length, setlength] = useState(0);
  const [area, setarea] = useState(0);
  const [answer, setanswer] = useState(0);

  function handleSolve() {
    const energy = (coefficient * area * temperature) / length;
    setanswer(energy);
  }

  return (
    <div className={styles.container}>
      <h1>please enter</h1>
      <div className={styles.inputs}>
        <div>
          <label>Heat transfer Coefficient (units)</label>
          <input
            type="number"
            value={coefficient}
            onChange={(e) => setcoefficient(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Temperature differnce (units)</label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => settemperature(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Length (units)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setlength(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Area normal (units)</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setarea(e.target.value)}
          ></input>
        </div>
      </div>
      {answer && <p className={styles.answer}>{answer}</p>}
      <button onClick={handleSolve}>Calculate</button>
    </div>
  );
}
export default Conduction;
