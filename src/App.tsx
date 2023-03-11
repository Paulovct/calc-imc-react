import styles from "./App.module.css";
import powerImage from "./assets/img/powered.png"
import leftArrow from "./assets/img/leftarrow.png"
import { useState } from "react";
import { calculateImc , levels , Level } from "./helpers/imc"
import { GridItem } from "./components/GridItem"




const App = ()=>{

  const [heightField , setHeightField] = useState<number>(0);

  const [weightField , setWeightField] = useState<number>(0);

  const [toShow , setToShow] = useState<Level | null> (null);

  const handleCalculateButton = ()=>{
    if(heightField !== 0 && weightField !== 0){
      setToShow(calculateImc(heightField,weightField))
  
    } else {
      alert("Digite todos os Campos!")
    }
  };

  const handleVoltarButton = ()=>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC e a sigla para Índice de Massa Corpórea. parâmetro adotado pela OMS para calcular o peso ideal de cada pessoa.</p>
        
          <input
            onChange={e => setHeightField(parseFloat(e.target.value))}
            type={"number"}
            value={heightField > 0 ? heightField : ""}
            placeholder="Digita a sua Altura. Ex 1.5 (Em metros)"
            disabled={toShow ? true : false}
          />

          <input
            onChange={e => setWeightField(parseFloat(e.target.value))}
            type={"number"}
            value={weightField > 0 ? weightField : ""}
            placeholder="Digita a seu Peso(Em Kg)"
            disabled={toShow ? true : false}
          />

          <button disabled={toShow ? true : false} onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>

          {!toShow && 
            <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item} />
            ))}
          </div>
        }
        {toShow && 
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleVoltarButton}>
              <img src={leftArrow} alt="" width={25}/>
            </div>
            <GridItem  item={toShow}/>
          </div>
        }
        </div>
      </div>
    </div>
    );
}

export default App;