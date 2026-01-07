import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './BatTextInputStyle';

interface BatTextInputProps{
  pass: string
}

export function BattextInput(props: BatTextInputProps) {
  return (
    < >
        <TextInput style={styles.inputer} 
        placeholder='PASS'
        value={props.pass}
        />
    </>
  );
}