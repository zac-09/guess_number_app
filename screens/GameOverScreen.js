import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const GameOverScreen = props =>{
 return (
      <View style={styles.screen}>
          <Text>the game is over my nigga</Text>
          <Text>Number of rounds: {props.roundsNumber}</Text>
          <Text>Number was: {props.userNumber}</Text>
          <Button title="RESTART GAME" onPress={props.onRestart} />

      </View>
 );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default GameOverScreen;