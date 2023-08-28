import React from "react";
import { Platform } from "react-native";

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButtom,
    SubmitText
} from '../SignIn/styles';

export default function SignUp() {

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''} // No Android o teclado sobe o conteúdo automaticamente na tela, 
                //mas o IOS não. Por isso é preciso utilizar esse Platform
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder="Nome"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                    />
                </AreaInput>

                <SubmitButtom>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButtom>

            </Container>
        </Background>
    )
}