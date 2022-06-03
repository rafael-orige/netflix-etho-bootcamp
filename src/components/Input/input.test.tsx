import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event"
import { ThemeProvider } from "styled-components";
import theme from "../../theme/main/theme";
import Input from "./input";

describe("Component: <Input />", () => {
    const InputComponent = <ThemeProvider theme={theme}><Input /></ThemeProvider>

    it("Should have an input", () => {
        render(InputComponent);

        const input = screen.getByRole("textbox");

        expect(input).toBeInTheDocument();
    })

    it("Should change value on typing", () => {
        render(InputComponent);

        const input = screen.getByRole("textbox");

        UserEvent.type(input, "Hello!")

        expect(input).toHaveValue("Hello!");
    })
})