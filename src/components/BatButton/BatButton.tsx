import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './BatButtonStyle';
import { BattextInput } from '../BattextInput/BatTextInput';
import generatePass from '../../service/passwordService';




export function BatButton() {

const [pass, setPass] = useState<string>('')

function handleGnerateButton(){
  let generateToken = generatePass()

  setPass(generateToken)
}

  return (

    <>

      <BattextInput
      pass={pass}
      />
        <TouchableOpacity
        style={styles.ButtonCopy}
        onPress={handleGnerateButton}>
        <Text style={styles.text}>⌛ GENERATE </Text>
      </TouchableOpacity>
          <TouchableOpacity
          style={styles.ButtonCopy}
          onPress={()=>{

          }}>
          <Text style={styles.text}>💾 COPY </Text>
      </TouchableOpacity>

    </>
    
  );
}