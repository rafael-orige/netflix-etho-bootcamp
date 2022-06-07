import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { component } from "../../test/component";
import Button from "./button";

describe("Component: <Button />", () => {
    const handleSend = jest.fn();
    const ButtonComponent = component(<Button onClick={handleSend}>Enviar</Button>);

    it('Should render a button with "Enviar" writen inside', () => {
        render(ButtonComponent);

        const button = screen.getByText("Enviar", { selector: "button" });

        expect(button).toBeInTheDocument();
    })

    it("Should call handleSend on click", () => {
        render(ButtonComponent);

        const button = screen.getByRole("button");
        userEvent.click(button);

        expect(handleSend).toHaveBeenCalledTimes(1);
    })
})