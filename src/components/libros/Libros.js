import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import Card from '../card/Card';
import CardSection from '../card/sections/CardSection';
import LibrosList from './LibrosList';
const Libros = (props)=>{
    const {tituloStyle} = styles;
    return(
        <Card>
            <CardSection>
                <Text style={tituloStyle}>{props.dataLibro.volumeInfo.title}</Text>
            </CardSection>
            <CardSection>
                <Button
                style={{marginTop:10}}
                title="Ver más"
                onPress={(e)=>console.log(e)}
                color="#ff9503"/>
            </CardSection>
        </Card>
    )
}

const styles = {
    tituloStyle:{
        fontSize: 18,
        alignSelf: 'center'
    }
}

export default Libros;