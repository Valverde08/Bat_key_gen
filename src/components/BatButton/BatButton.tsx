import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./BatButtonStyle";
import { BattextInput } from "../BattextInput/BatTextInput";
import generatePass from "../../service/passwordService";
import * as Clipboard from "expo-clipboard";

export function BatButton() {
  const [pass, setPass] = useState<string>("");

  function handleGnerateButton() {
    let generateToken = generatePass();

    setPass(generateToken);
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BattextInput pass={pass} />
      <TouchableOpacity style={styles.ButtonCopy} onPress={handleGnerateButton}>
        <Text style={styles.text}>⌛ GENERATE </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonCopy} onPress={handleCopy}>
        <Text style={styles.text}>💾 COPY </Text>
      </TouchableOpacity>
    </>
  );
}
