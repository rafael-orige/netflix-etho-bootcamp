import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/main/theme";
import Button from "./button";

describe("Component: <Button />", () => {
    const ButtonComponent = <ThemeProvider theme={theme}><Button /></ThemeProvider>

    it("Should render a button", () => {
        render(ButtonComponent)

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    })
})