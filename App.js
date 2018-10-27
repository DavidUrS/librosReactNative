/**
 * Created by David Uribe
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Card from './src/components/card/Card';
import CardSection from './src/components/card/sections/CardSection';
import Libros from './src/components/libros/Libros';

export default class App extends Component{
  render() {
    return (
      <View style={{marginTop:10}}>
          <Libros></Libros>
      </View>
    );
  }
}
