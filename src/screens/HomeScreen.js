import React from "react";
import { Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { auth } from "../../firebase.config";

const HomeScreen = ({ navigation }) => {
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Button title="Sign Out" onPress={handleSignout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
