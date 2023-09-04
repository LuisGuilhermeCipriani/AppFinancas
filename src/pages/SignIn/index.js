import React, {useState, useContext} from "react";
import { Platform, ActivityIndicator } from "react-native";
import { 
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input, 
    SubmitButtom, 
    SubmitText, 
    Link, 
    LinkText 
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import {AuthContext} from "../../contexts/auth";

export default function SignIn(){

    const navigation = useNavigation();
    const {signIn, loadingAuth} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        signIn(email, password);
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''} // No Android o teclado sobe o conteúdo automaticamente na tela, 
                                                                  //mas o IOS não. Por isso é preciso utilizar esse Platform
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />

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

                <SubmitButtom activeOpacity={0.8} onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF"/>
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButtom>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>

        </Background>
    )
}