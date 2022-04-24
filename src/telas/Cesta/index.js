import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/item";
import Texto from "../../componentes/texto";
//import Botao from "../../componentes/botao";

export default function Cesta({ topo, detalhes, itens}){
    //Será criado um fraguimento (<> </>) para poder retornar todos os componentes do return
    return <> 

        <FlatList
            data={itens.lista}
            renderItem = {Item}
            keyExtractor = {({ nome }) => nome}
            ListHeaderComponent = {() => {
                return <>
                    <Topo {...topo} />
    
                    <View style={estilo.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilo.titulo}>{ itens.titulo}</Texto>
                    </View>
                
                </>
            }}
        />
    </>
}

const estilo = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    
})