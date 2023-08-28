import React, {useContext} from "react";
import { Platform } from "react-native";

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButtom,
    SubmitText
} from '../SignIn/styles';

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {

    const {user} = useContext(AuthContext);

    function handleSignUp(){
        console.log(user.nome);
    }

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

                <SubmitButtom onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButtom>

            </Container>
        </Background>
    )
}