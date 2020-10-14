import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import { useTheme } from "@react-navigation/native";

const MessagesScreen = () => {
    const { colors } = useTheme();

  const theme = useTheme();
  return (
    <View style={styles.container}>
    <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} backgroundColor='#ad09ed' />
      <Text>Inbox Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
