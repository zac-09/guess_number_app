import React, {useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet, Button,Alert} from 'react-native';
import NumberContainer from '../componets/NumberContainer';
import Card from '../componets/Card';

const generateRandomBetween = (min, max, exclude) =>{
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max-min)) + min;
        if (randomNumber === exclude){
            return generateRandomBetween(min,max,exclude);
        }else{
            return randomNumber;
        }
};


const GameScreen = props =>{
        const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
       const [rounds, setRounds] = useState(0);
       
        const nextGuessHandler = direction =>{
            if ((direction ==='lower' && currentGuess < props.userChoice) || (direction ==='greater' && currentGuess > props.userChoice) ){
                    Alert.alert('Nigga dont fuck with the game','y\'all know its wrong',[{text:'Sorry',style:'cancel'}]);
                    return;
            }
            if (direction === 'lower'){
                
                currentHigh.current = currentGuess;
            }else{
                currentLow.current = currentGuess;
            }
           const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
           setCurrentGuess(nextNumber);
           setRounds(curRounds => curRounds + 1);
        };
        const currentLow = useRef(1);
        const currentHigh = useRef(100);
        const {userChoice, onGameOver} = props;
        useEffect(()=>{
            if (currentGuess === userChoice){
                onGameOver(rounds);
            }
        },[currentGuess,userChoice,onGameOver]);



        return(
            <View style={styles.screen}>
                <Text>Opponet's guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title="Lower" onPress ={nextGuessHandler.bind(this,'lower')} />
            <Button title="higher" onPress ={nextGuessHandler.bind(this,'greater')} />

        </Card>
            </View>
        );

};


const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:20,
        width:300,
        maxWidth:'80%',
        justifyContent:'space-around'
    }
});

export default GameScreen;