import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

import MeusDados from './DadosPessoais';
import Formacao from './Formacao';


class App extends Component{
  render(){
    return(
      <View style={{backgroundColor: '#022436'}}>              
        <MeusDados/>
        <Formacao/>      

      </View>
    )
  }
}


export default App;