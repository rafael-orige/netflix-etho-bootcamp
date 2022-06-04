import { Button as ButtonStyled } from "./button.styled";

type Props = {
    onClick: () => void,
    children: string
}

export default function Button({ onClick, children }: Props) {
    return <ButtonStyled onClick={onClick} children={children} />
}