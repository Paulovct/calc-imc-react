import {Level} from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/img/up.png";
import downImage from "../../assets/img/down.png";


type Props = {
	item: Level;
};


export const GridItem = ({item }: Props) => {
	return (
		<div className={styles.main} style={{backgroundColor:item.color}}>
			<img src={ item.title !== "Normal" ? downImage : upImage} alt="" />
			<h2>{item.title}</h2>

			{item.yourImc && 
				<div className={styles.yourImc}> Seu IMC é de <strong>{item.yourImc.toFixed(2)}</strong> kg/m²</div>
			}

			<p> IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>.</p>
		</div>
	);
}