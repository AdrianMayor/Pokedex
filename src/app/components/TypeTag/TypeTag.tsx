import styles from "./TypeTag.module.scss";

export interface ITypeTag {
	type:
		| "normal"
		| "grass"
		| "fire"
		| "water"
		| "electric"
		| "poison"
		| "ghost"
		| "bug"
		| "fight"
		| "ice"
		| "rock"
		| "psychic"
		| "steel"
		| "dragon"
		| "flying"
		| "ground"
		| "fairy"
		| "dark";
}
const TypeTag = ({ type }: ITypeTag) => {
	return (
		<span className={styles[`typeTag_container--${type}`]}>
			<img src={`/icons/${type}_type.png`} alt='Pokemon type icon' />
			{type}
		</span>
	);
};

export default TypeTag;
