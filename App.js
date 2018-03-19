import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Btn from "./src/components/Btn";

export default class App extends Component {
  state = {
      characters: ''
  };

  addCharacter = (character) => {
      this.setState({
          characters: this.state.characters + character
      })
  };

  clearCalc = () => {
      this.setState({characters: ''})
  };

  removeCharacter = () => {
      this.setState(prevState => {
          const characters = prevState.characters;
          const num = characters.length - 1;
          newCharacters = characters.substring(0, num);
          return {characters: newCharacters}
      })

  };

  calcAmount = () => {
      const characters = this.state.characters;
      if (characters.indexOf('+') !== -1) {
          const numbers = this.state.characters.split('+');
          const sum = parseFloat(numbers[0], 10) + parseFloat(numbers[1], 10);
          this.setState({characters: String(sum)})
      } else if (characters.indexOf('-') !== -1){
          const numbers = this.state.characters.split('-');
          const diff = parseFloat(numbers[0], 10) - parseFloat(numbers[1], 10);
          this.setState({characters: String(diff)})
      } else if (characters.indexOf('*') !== -1) {
          const numbers = this.state.characters.split('*');
          const multiply = parseFloat(numbers[0], 10) * parseFloat(numbers[1], 10);
          this.setState({characters: String(multiply)})
      } else if (characters.indexOf('/') !== -1) {
          const numbers = this.state.characters.split('/');
          const division = parseFloat(numbers[0], 10) / parseFloat(numbers[1], 10);
          this.setState({characters: String(division)})
      }
  };

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{textAlign: 'right', fontSize: 30}}>{this.state.characters}</Text>
            </View>
            <View style={styles.containerInner}>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('1')}>1</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('2')}>2</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('3')}>3</Btn>
                <Btn btnStyle={styles.btn2} pressBtn={() => this.addCharacter('+')}>+</Btn>
                <Btn btnStyle={styles.btn2} pressBtn={this.removeCharacter}>&lt;</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('4')}>4</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('5')}>5</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('6')}>6</Btn>
                <Btn btnStyle={styles.btn2} pressBtn={() => this.addCharacter('-')}>-</Btn>
                <Btn btnStyle={styles.btn2}>M+</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('7')}>7</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('8')}>8</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('9')}>9</Btn>
                <Btn btnStyle={styles.btn2} pressBtn={() => this.addCharacter('*')}>*</Btn>
                <Btn btnStyle={styles.btn2}>M-</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('.')}>.</Btn>
                <Btn btnStyle={styles.btn1} pressBtn={() => this.addCharacter('0')}>0</Btn>
                <Btn btnStyle={styles.btn2}>%</Btn>
                <Btn btnStyle={styles.btn2} pressBtn={() => this.addCharacter('/')}>/</Btn>
                <Btn btnStyle={styles.btn3} pressBtn={this.calcAmount}>=</Btn>
                <Btn btnStyle={styles.btn4} pressBtn={this.clearCalc}>CE</Btn>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    containerTop: {
        width: '100%',
        height: 60,
        paddingBottom: 3,
        paddingTop: 8,
        paddingRight: 5
    },
    containerInner: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    btn1: {
        width: '20%',
        height: '15%',
        backgroundColor: '#1effbe',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    btn2: {
        width: '20%',
        height: '15%',
        backgroundColor: '#cc6f72',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    btn3: {
        width: '20%',
        height: '15%',
        backgroundColor: '#ff9d4b',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    btn4: {
        width: '100%',
        height: '15%',
        backgroundColor: '#6fbbc8',
        borderWidth: 1,
        borderColor: '#ccc'
    }
});
