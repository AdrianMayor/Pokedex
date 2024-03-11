import TypeTag from "@/app/components/TypeTag/TypeTag";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("TypeTag Test Suite", () => {
	it("should render", () => {
		// Render the TypeTag component with type "normal"
		const { getByText, getByAltText } = render(<TypeTag type='normal' />);

		// Assert that the component renders properly
		expect(getByText("normal")).toBeInTheDocument();
		expect(getByAltText("Pokemon type icon")).toBeInTheDocument();
	});

	it("should render 'fire' text and fire_type.png when type is 'fire'", () => {
		// Render the TypeTag component with type "fire"
		const { getByText, getByAltText } = render(<TypeTag type='fire' />);

		// Assert that the component renders the correct text and image
		expect(getByText("fire")).toBeInTheDocument();
		expect(getByAltText("Pokemon type icon")).toHaveAttribute("src", "/icons/fire_type.png");
	});
});
