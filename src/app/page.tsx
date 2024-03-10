import TypeTag, { ITypeTag } from "./components/Type/TypeTag";

export default function Home() {
	const test: ITypeTag["type"][] = [
		"normal",
		"grass",
		"fire",
		"water",
		"electric",
		"poison",
		"ghost",
		"bug",
		"fight",
		"ice",
		"rock",
		"psychic",
		"steel",
		"dragon",
		"flying",
		"ground",
		"fairy",
		"dark",
	];
	return (
		<>
			{test.map((item) => (
				<TypeTag key={item} type={item} />
			))}
		</>
	);
}
