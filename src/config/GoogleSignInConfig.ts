import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: "WEB_CLIENT_ID.apps.googleusercontent.com",
    offlineAccess: true,
  });
};
