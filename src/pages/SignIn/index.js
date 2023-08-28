import React from "react";
import { Platform } from "react-native";
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

export default function SignIn(){

    const navigation = useNavigation();

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
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                    />
                </AreaInput>

                <SubmitButtom activeOpacity={0.8}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButtom>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>

        </Background>
    )
}