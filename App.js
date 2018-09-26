import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.redScreen}>
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 200, height: 200 }}
          />
          <View style={styles.whiteScreen}>
            <View style={styles.passwordForm}>
              <Text
                style={styles.choosePassword}
              >Choose a new password
              </Text>
              <TextInput
                style={styles.passwordStyle}
                onChangeText={(text) => this.setState({ text })}
                keyboardType="email-address"
                placeholder="Password"
              />
              <TextInput
                style={styles.confirmPasswordStyle}
                onChangeText={(text) => this.setState({ text })}
                keyboardType="email-address"
                placeholder="Confirm Password"
              />
              <TouchableHighlight
                style={styles.continue}>
                <Text
                  style={styles.continueText}
                >Continue</Text>
              </TouchableHighlight>
            </View>

          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFF',
  },
  redScreen: {
    flex: 1,
    backgroundColor: '#D43939',
    alignItems: 'center',
  },
  whiteScreen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  passwordForm: {
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  choosePassword: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D43939',
    marginBottom: 30,
  },
  passwordStyle: {
    height: 36,
    borderColor: '#D43939',
    borderWidth: 1,
    width: "90%",
    marginTop: 10,
    padding: 5,
    borderRadius: 5
  },
  confirmPasswordStyle: {
    height: 36,
    borderColor: '#D43939',
    borderWidth: 1,
    width: "90%",
    marginTop: 10,
    padding: 5,
    borderRadius: 5
  },
  continue: {
    height: 36,
    backgroundColor: '#D43939',
    borderColor: '#D43939',
    borderWidth: 1,
    width: "90%",
    marginTop: 25,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueText: {
    height: 36,
    lineHeight: 36,
    color: '#FFF'
  },
});
