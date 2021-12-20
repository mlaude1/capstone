import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../firebase/clientApp"

// Configure FirebaseUI
const uiConfig = {
  // Redirect to / after sign in is successful
  signInSuccessUrl: "/",
  // Display auth providers
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
  // firebase.auth.EmailAuthProvider.PROVIDER_ID
}

function SignInScreen() {
  return (
    <div
    style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>IceCream Login</h1>
      <p>Please sign-in</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default SignInScreen;