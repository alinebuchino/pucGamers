import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

import { styles } from "./styles";

import { Button } from "../../components/Button";

export function DropDataBaseSuccess() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sucesso!</Text>
      <Text style={styles.success}>
        Todas as partidas foram apagadas com êxito!
      </Text>
      <View style={styles.buttonConfirm}>
        <Button title={"Voltar"} onPress={handleGoBack} />
      </View>
    </View>
  );
}