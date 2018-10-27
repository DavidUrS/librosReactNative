import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import Card from '../card/Card';
import CardSection from '../card/sections/CardSection';
import LibrosList from './LibrosList';
const Libros = (props)=>{
    return(
        <Card>
            <CardSection>
                <Text>{props.dataLibro.volumeInfo.title}</Text>
            </CardSection>
            <CardSection>
                <TouchableOpacity>
                    <Text>Ver más..</Text>
                </TouchableOpacity>
            </CardSection>
            <CardSection>
                <Button
                style={{marginTop:10}}
                title="Aceptar"
                onPress={(e)=>console.log(e)}
                color="#ff9503"/>
            </CardSection>
        </Card>
    )
}

export default Libros;