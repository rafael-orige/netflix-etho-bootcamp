import React, { useState, useCallback } from "react";
import * as yup from "yup";
import { Grid } from "@mui/material";
import { Wrapper } from "./login.styled";

import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import FormError from "../../components/FormError/formError";



export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState("");

    const handleChange = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setData(prevData => ({
            ...prevData,
            [target.name]: target.value
        }))
    }, [setData])

    const handleSend = useCallback(async () => {
        try {
            const schema = yup.object().shape({
                email: yup.string().required().email(),
                password: yup.string().required()
            })

            await schema.validate(data);

            setError("");
        } catch (e: any) {
            setError(e.errors[0])
            console.log("Deu erro!", error)
        }
    }, [data])



    return (
        <Wrapper container justifyContent="center" alignContent="center">
            <Grid item container justifyContent="center" alignContent="center" xs={2}>
                <Input
                    placeholder="Email"
                    type="text"
                    value={data.email}
                    onChange={handleChange} name="email"
                />
                <Input
                    placeholder="Password"
                    type="text"
                    value={data.password}
                    onChange={handleChange}
                    name="password"
                />
                <FormError message={error} />
                <Button onClick={handleSend}>Entrar</Button>
            </Grid>
        </Wrapper>
    )
};