import { render, screen } from "@testing-library/react";
import Header from "../../Components/Header/header";
import { Input } from "@chakra-ui/react";

describe("Input Element", () => {
  test("Should be able to render input", () => {
    render(<Input placeholder="Pesquise por grupos" />);

    const input = screen.getByPlaceholderText("Pesquise por grupos");

    expect(input).toBeInTheDocument();
  });
});

describe("Input Element - ERROR", () => {
    test("Should display error message if the information int the input is wrong", () => {
        render(<Input error="Email obrigatório"/>) 
    })
})