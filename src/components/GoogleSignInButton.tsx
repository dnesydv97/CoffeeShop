import React from "react";
import { TouchableOpacity, Image, Text, Alert } from "react-native";
import styled from "styled-components/native";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { navigation } from "../utils";
import { navigate } from "../utils/navigation";

const GoogleButton = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: white;
  width: 90%;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-bottom: 50px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 5;
`;

const GoogleIcon = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: rgba(0,0,0,0.54);
`;

const GoogleSignInButton = () => {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      Alert.alert("Logged in!", `Welcome ${userInfo.user.name}`);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("Cancelled", "Google Sign-in was cancelled.");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert("Sign-in in Progress", "Please wait...");
      } else {
        Alert.alert("Error", error.message);
      }
    }
    // navigate('CoffeeListScreen')
  };

  return (
    <GoogleButton onPress={signInWithGoogle}>
      <GoogleIcon source={require("../assets/google-icon.png")} />
      <ButtonText>Continue with Google</ButtonText>
    </GoogleButton>
  );
};

export default GoogleSignInButton;
