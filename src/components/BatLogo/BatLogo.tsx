import React from 'react';
import { View,Text, Image } from 'react-native';
import { styles } from './BatLogoStyle';
import batlogo from '../../../assets/bat-logo.png'



export function BatLogo() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={batlogo} style={styles.imgLogo}/>
    </View>
  );
}