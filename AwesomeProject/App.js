import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VideoComponent from './VideoComponent'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sample app showing how you can play videos</Text>
        <Text>from your react native app.</Text>
        <VideoComponent mute={false}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
