import React from 'react';
import { View } from 'react-native';
import styles from './CardStyles';

const Card = (props)=>{
    return(
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    )
}

export default Card;