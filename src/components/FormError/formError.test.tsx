import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/main/theme";
import FormError from "./formError";

describe('Component: <FormError />', () => {
    const FormErrorComponent = <ThemeProvider theme={theme}><FormError message={'Error!'} /></ThemeProvider>

    test('Should render an error component with "Error!" writen', () => {
        render(FormErrorComponent)

        const message = screen.getByText("Error!");

        expect(message).toBeInTheDocument();
    })
})