import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
// import * as auth from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // const _auth =getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log("error", error);
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
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
      <Text style={styles.heading}>Sign Up</Text>
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
      <Button title="Sign Up" onPress={handleSignUp} />
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

export default Signup;
