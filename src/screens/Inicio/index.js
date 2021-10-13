import React, {useEffect} from "react";
import { Text } from "react-native";
import {Container, LoadingIcon} from './styles'
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";


import Logo from '../../assets/logo.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async () => { //vai checar o token cadastrado se existe ou não para manter o app logado
            const token = await AsyncStorage.getItem('token');
            if(token !== null){
                //validando o token
                
            }else {
                navigation.navigate('Login');
            }
        }
        checkToken();
    }, []);

    return(
        <Container>
            <Logo width="100%" height="160"/>
            <LoadingIcon size="large" color="#fff"/>
        </Container>
    )
}