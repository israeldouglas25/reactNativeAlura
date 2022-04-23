import React from "react";
import { StyleSheet,Image,Dimensions, Text, View } from "react-native";

import Texto from "../componentes/texto";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    //Será criado um fraguimento (<> </>) para poder retornar todos os componentes do return
    return <> 
    <Image source={topo} style={estilo.topo}/>
    <Texto style={estilo.titulo}>Detalhe da cesta</Texto>

    <View style={estilo.cesta}>
        <Texto style={estilo.nome}>Cesta de Verduras</Texto>
        <View style={estilo.fazenda}>
            <Image source={logo} style={estilo.imagemFazenda}/>
            <Texto style={estilo.nomeFazenda}>Janny Jack Farm</Texto>
        </View>
        
        <Texto style={estilo.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para cozinha.</Texto>
        <Texto style={estilo.preco}>R$ 40,00</Texto>
    </View>
    </>
}

const estilo = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, //Nas propriedades da imagem tem a altura (578) e a largura(768) que multiplica pela const width criada
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})