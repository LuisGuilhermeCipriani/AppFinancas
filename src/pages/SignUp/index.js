import React, {useContext, useState} from "react";
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

    const {signUp} = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        signUp(email, password, nome);
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
                        valur={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButtom onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButtom>

            </Container>
        </Background>
    )
}