import React from 'react';
import {View} from 'react-native';
import styles from './CardSectionStyle.js';

const CardSection = (props)=>{
	return(
		<View 
			styles={styles.viewStyles}>
			{props.children}
		</View>
	)
}

export default CardSection;