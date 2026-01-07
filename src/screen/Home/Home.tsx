import React from 'react';
import { View,Text } from 'react-native';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import styles from './HomeStyle';
import { BattextInput } from '../../components/BattextInput/BatTextInput';
import { StatusBar } from 'expo-status-bar';
import { BatButton } from '../../components/BatButton/BatButton';



export function Home() {
  return (
    
    <View style={styles.container}>
        <View style={styles.LogoContainer}>
            <BatLogo/>
        </View>
        <View style={styles.InputContainer}>
            <BatButton/>
        </View>
        
        
        <StatusBar style={'light'}/>
    </View>

    
  );
}

