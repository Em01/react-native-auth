import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {loggedIn: null}

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyArBrd2L5ZZNOksHjQdYRZQrnPWkLqSXWc',
      authDomain: 'auth-9d2df.firebaseapp.com',
      databaseURL: 'https://auth-9d2df.firebaseio.com',
      storageBucket: 'auth-9d2df.appspot.com',
      messagingSenderId: '716254483634'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false})
      }
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return (
          <LoginForm />
        )
      default:
        return (
         <Spinner size="large" />
       )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    )
  }
}


export default App
