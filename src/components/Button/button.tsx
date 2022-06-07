import React from "react";
import { Button as ButtonStyled } from "./button.styled";

type Props = {
    onClick: () => void,
    children: React.ReactNode
}

export default function Button({ onClick, children }: Props) {
    return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}