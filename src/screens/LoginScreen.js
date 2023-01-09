import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log("error", error);
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <TextInput
        placeholder="user@gmail.com"
        keyboardType="email"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect="false"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
      />
      <TextInput
        placeholder="Enter password"
        keyboardType="password"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect="false"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleSignIn} />
      <Button title="Register" onPress={() => navigation.navigate("Signup")} />
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
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
  input: {
    margin: 10,
    borderBottomWidth: 0.5,
    width: "80%",
    padding: 10,
    borderColor: "gray",
  },
});

export default LoginForm;
