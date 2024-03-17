import { useState } from "react";
import styles from "./SpaceTimePFR.module.css";
import ButtonCalci from "../utils/ButtonCalci";

function SpaceTimePFR() {
  const [order, setorder] = useState(null);
  const [initconcen, setiniconcen] = useState(null);
  const [rateconstant, setrateconstant] = useState(null);
  const [Conversion, setConversion] = useState(null);
  const [answer, setanswer] = useState("");

  function handleSolve() {
    if (+order === 1) {
      const tau = (1 / rateconstant) * Math.log(1 / (1 - initconcen));
      setanswer(tau.toFixed(2));
    } else {
      const tau =
        (initconcen ** (1 - rateconstant) / rateconstant ** (1 - order)) *
        ((1 - Conversion) ** (order - 1) / (1 - Conversion) ** (order - 1));

      setanswer(tau.toFixed(2));
    }
  }

  return (
    <div className={styles.container}>
      <h1>Enter Values</h1>
      <div className={styles.inputs}>
        <div className={styles["label-input"]}>
          <label>Order of reaction (units)</label>
          <input
            type="number"
            value={order}
            onChange={(e) => setorder(e.target.value)}
          ></input>
        </div>

        <div className={styles["label-input"]}>
          <label>Initial concentration (units)</label>
          <input
            type="number"
            value={initconcen}
            onChange={(e) => setiniconcen(e.target.value)}
          ></input>
        </div>

        <div className={styles["label-input"]}>
          <label>Conversion (units)</label>
          <input
            type="number"
            value={Conversion}
            onChange={(e) => setConversion(e.target.value)}
          ></input>
        </div>

        <div className={styles["label-input"]}>
          <label>Rate constant (units)</label>
          <input
            type="number"
            value={rateconstant}
            onChange={(e) => setrateconstant(e.target.value)}
          ></input>
        </div>
      </div>
      <div className={styles["btn-ans"]}>
        <ButtonCalci handleSolve={handleSolve} />
        {answer && <p>{answer}</p>}
      </div>
    </div>
  );
}
export default SpaceTimePFR;
