import React from "react";
import { Error } from "./formError.styled";

export default function FormError(props: any) {
    const { message, ...restProps } = props;
    return <Error {...restProps}>{message}</Error>
}