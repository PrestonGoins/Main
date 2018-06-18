import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCOWvuXCTfdYIFB9LP5hmBLXylvGn8kRXE",
            authDomain: "auth-2legit.firebaseapp.com",
            databaseURL: "https://auth-2legit.firebaseio.com",
            projectId: "auth-2legit",
            storageBucket: "auth-2legit.appspot.com",
            messagingSenderId: "224866251039"
          });
    }
   render() {
       return (
           <View>
               <Header headerText="Authentication" />
               <LoginForm />
           </View>
       );
   }
}

export default App;