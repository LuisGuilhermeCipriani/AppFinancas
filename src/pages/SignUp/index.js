import React, {useContext, useState} from "react";
import { Platform, ActivityIndicator } from "react-native";

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

    const {signUp, loadingAuth} = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        if(nome === "" || email === "" || password === "") return;

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

                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF"/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButtom>

            </Container>
        </Background>
    )
}