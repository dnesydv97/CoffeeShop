import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { configureGoogleSignIn } from "../config/GoogleSignInConfig";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { SpacerColumn, Typography } from "../components";
import { navigate } from "../utils/navigation";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/coffee-background.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "black"]}
        style={styles.gradient}
      />
      <View style={styles.textContainer}>
        <Typography title='Coffee so good, your taste buds will love it.' style={styles.title}/>
        <SpacerColumn size={2}/>
        <Text style={styles.subtitle}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity onPress={()=> navigate('CoffeeListScreen')}>
        <Typography title="Login without google" color="grey" size="md"/>
        </TouchableOpacity>
        <SpacerColumn size={1.5}/>

        <GoogleSignInButton  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: width,
    height: height * 0.70, 
    position: "absolute",
    top: 0,
  },
  gradient: {
    position: "absolute",
    width: width,
    height: height * 4,
    top: 0,
  },
  textContainer: {
    width: "100%",
    height: height * 0.35, 
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: width * 0.04,
    color: "#A9A9A9",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default LoginScreen;
