import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyArBrd2L5ZZNOksHjQdYRZQrnPWkLqSXWc',
      authDomain: 'auth-9d2df.firebaseapp.com',
      databaseURL: 'https://auth-9d2df.firebaseio.com',
      storageBucket: 'auth-9d2df.appspot.com',
      messagingSenderId: '716254483634'
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
